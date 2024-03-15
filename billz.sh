#!/bin/bash
PAYCHECK=$((( $(date "+%d") < 12 || 26 < $(date "+%d") )) && echo "2" || echo "1")

# print header if you want it
#head -n 1 bills.txt | awk 'BEGIN{FS="\t"}{printf "%7s|  %s\n", $2, $1}'

# sort descending price:
# ./billz.sh | sort -rn -t $'\t'

# get each autopay bill for the shared paycheck
sleep 3
tput bel
sleep 0.3
tput bel
sleep 0.3
tput bel
echo "get ready!"
sleep 2
echo "go!"

awk "BEGIN{FS=\"\t\"} \$3 ~ /${PAYCHECK}/ && \$4 ~ /y/ && \$5 ~ /n/ {printf \"%7s, %s\n\", \$2, \$1}" bills.txt | IFS='' cat - |
  while read bill; do
    echo "$bill" | tee >(pbcopy)
    tput bel
    sleep 3
  done


# budget
awk "BEGIN{FS=\"\t\"} \$3 ~ /${PAYCHECK}/ && \$5 ~ /y/ {printf \"budget %s, %s\n\", \$2, \$1}" bills.txt | IFS='' cat - |
  while read bill; do
    echo "$bill" | tee >(pbcopy)
    tput bel
    sleep 3
  done


# non-autopay
awk "BEGIN{FS=\"\t\"} \$3 ~ /${PAYCHECK}/ && \$4 ~ /n/ && \$6 ~ /h/ {print \$6}" bills.txt | IFS='' cat - |
  while read bill; do
    open -a Firefox "$bill"
  done

# send OS notification using applescript:
#osascript -e 'display notification "All done!" with title "Billz"'
