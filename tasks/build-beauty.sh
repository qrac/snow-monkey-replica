#!/bin/sh


# Target

distDir="./dist"

distMain="$distDir/snow-monkey-replica.css"
distG1="$distDir/snow-monkey-replica-g-style.css"
distG2="$distDir/snow-monkey-replica-g-theme.css"
distSM1="$distDir/snow-monkey-replica-sm-style.css"
distSM2="$distDir/snow-monkey-replica-sm-custom-widgets.css"
distSMB1="$distDir/snow-monkey-replica-smb-blocks.css"
distSMB2="$distDir/snow-monkey-replica-smb-all.css"
distSME1="$distDir/snow-monkey-replica-sme-app.css"

distFiles=($distMain $distG1 $distG2 $distSM1 $distSM2 $distSMB1 $distSMB2 $distSME1)


# Beauty Files

for i in "${distFiles[@]}"
do
 cleancss -O1 -o "${i}" "${i}"
done

prettier --write "$distDir/**/*.css"

for i in "${distFiles[@]}"
do
 js-beautify -s 2 -f "${i}" -o "${i}"
done