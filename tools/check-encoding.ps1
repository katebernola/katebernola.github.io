# Catch mojibake the moment a file is written, before it reaches a commit.
#
# Runs as a Claude Code PostToolUse hook on Write and Edit. Reads the hook's
# JSON from stdin, looks at the file that was just touched, and reports if it
# contains the byte signature of UTF-8 text that was decoded as Windows-1252.
#
# The signature is the bytes C3 82, C3 83 and C3 A2, which encode the
# characters A-circumflex, A-tilde and a-circumflex. Those three never appear
# in this site's English copy and always appear in mojibake, so a hit is
# corruption rather than content. This file stays pure ASCII so it can never
# be corrupted by the thing it is looking for.
#
# See tools/check-encoding.sh for the commit-time version.

$ErrorActionPreference = 'Stop'

try {
  $payload = [Console]::In.ReadToEnd() | ConvertFrom-Json
  $path = $payload.tool_input.file_path
  if (-not $path) { $path = $payload.tool_response.filePath }
  if (-not $path) { exit 0 }

  $ext = [IO.Path]::GetExtension($path).ToLower()
  if ($ext -notin '.html', '.css', '.js', '.md', '.json', '.svg', '.txt') { exit 0 }
  if (-not (Test-Path -LiteralPath $path)) { exit 0 }

  $bytes = [IO.File]::ReadAllBytes($path)
  $hits = 0
  for ($i = 0; $i -lt $bytes.Length - 1; $i++) {
    if ($bytes[$i] -eq 0xC3 -and ($bytes[$i+1] -in 0x82, 0x83, 0xA2)) { $hits++ }
  }

  if ($hits -gt 0) {
    $name = Split-Path $path -Leaf
    $msg = "Mangled characters in ${name}: $hits found. UTF-8 read as Windows-1252. Fix before continuing; do not commit."
    @{
      systemMessage = $msg
      hookSpecificOutput = @{
        hookEventName = 'PostToolUse'
        additionalContext = $msg
      }
    } | ConvertTo-Json -Compress
  }
} catch {
  # A broken check must never block real work.
  exit 0
}

exit 0
