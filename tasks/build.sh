#!/bin/sh


# Target

distDir="./dist"
distDirG="$distDir/gutenberg"
distDirSM="$distDir/snow-monkey"
distDirSMB="$distDir/snow-monkey-blocks"
distDirSME="$distDir/snow-monkey-editor"

distMain="$distDir/snow-monkey-replica.css"
distG1="$distDirG/style.css"
distG2="$distDirG/theme.css"
distSM1="$distDirSM/style.css"
distSM2="$distDirSM/custom-widgets.css"
distSMB1="$distDirSMB/blocks.css"
distSMB2="$distDirSMB/all.css"
distSME1="$distDirSME/app.css"

distFiles=($distMain $distG1 $distG2 $distSM1 $distSM2 $distSMB1 $distSMB2 $distSME1)


# Make Dist Directory

mkdir -p $distDir
mkdir -p $distDirG
mkdir -p $distDirSM
mkdir -p $distDirSMB
mkdir -p $distDirSME


# Create Files

cp ./temp/gutenberg/build/block-library/style.css $distG1
cp ./temp/gutenberg/build/block-library/theme.css $distG2

cp ./temp/snow-monkey/assets/css/style.css $distSM1
cp ./temp/snow-monkey/assets/css/custom-widgets.css $distSM2

cp ./temp/snow-monkey-blocks/dist/css/blocks.css $distSMB1
node ./tasks/concat-glob.js -f './temp/snow-monkey-blocks/dist/block/**/style.css' -o $distSMB2

cp ./temp/snow-monkey-editor/dist/css/app.css $distSME1

concat -o $distMain $distG1 $distG2 $distSM1 $distSM2 $distSMB1 $distSMB2 $distSME1


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