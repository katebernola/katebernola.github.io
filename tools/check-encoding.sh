#!/bin/sh
# Catch mojibake before it reaches the site.
#
# Mojibake is UTF-8 text that got read as Windows-1252 and written back, which
# turns "resume" with accents into "rA(c)sumA(c)" and an arrow into three junk
# characters. It is invisible to whoever makes it and permanent once committed,
# because the wrong characters are then themselves valid UTF-8.
#
# It happened here once, in commit 828a544, from a PowerShell
# Get-Content / Set-Content round trip. Windows PowerShell 5.1 reads a
# BOM-less UTF-8 file as Windows-1252 unless told otherwise. Thirty-eight
# characters across four pages were wrong for two days before anyone saw them.
#
# The test is the bytes C3 82, C3 83 and C3 A2, which encode the characters
# A-circumflex, A-tilde and a-circumflex. Those three never appear in this
# site's English copy, and all three appear constantly in mojibake, so any hit
# is corruption rather than content. This file stays pure ASCII so it can
# never be corrupted by the thing it is looking for.
#
# Usage:
#   tools/check-encoding.sh          scan files staged for commit
#   tools/check-encoding.sh --all    scan every tracked file

pattern="$(printf '\303[\202\203\242]')"
status=0
header_shown=0

if [ "$1" = "--all" ]; then
  files=$(git ls-files)
else
  files=$(git diff --cached --name-only --diff-filter=ACM)
fi

for f in $files; do
  case "$f" in
    *.html|*.css|*.js|*.md|*.json|*.svg|*.txt) ;;
    *) continue ;;
  esac

  if [ "$1" = "--all" ]; then
    [ -f "$f" ] || continue
    hits=$(LC_ALL=C grep -nE "$pattern" "$f" 2>/dev/null | head -5)
  else
    hits=$(git show ":$f" 2>/dev/null | LC_ALL=C grep -nE "$pattern" | head -5)
  fi

  if [ -n "$hits" ]; then
    if [ "$header_shown" -eq 0 ]; then
      echo "Mangled characters found. These are UTF-8 characters that were"
      echo "read as Windows-1252 somewhere along the way."
      echo
      header_shown=1
    fi
    echo "  $f"
    echo "$hits" | sed 's/^/    /'
    status=1
  fi
done

if [ "$status" -ne 0 ]; then
  echo
  echo "Fix the characters, then try again."
  echo "To commit anyway: git commit --no-verify"
fi

exit $status
