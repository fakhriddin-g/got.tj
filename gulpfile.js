"use strict"

const {src, dest} = require("gulp")
const gulp = require("gulp")
const autoprefixer = require("gulp-autoprefixer")
const cssbeautify = require("gulp-cssbeautify")
const removeComments = require("gulp-strip-css-comments")
const rename = require("gulp-rename")
const sass = require("gulp-sass")(require("sass"))
const cssnano = require("gulp-cssnano")
const uglify = require("gulp-uglify")
const plumber = require("gulp-plumber")
const panini = require("panini")
const imagemin = require("gulp-imagemin")
const del = require("del")
const browserSync = require("browser-sync").create()

/* Paths */
const srcPath = "src/"
const distPath = "dist/"

const path = {
  build: {
    html: distPath,
    css: distPath + "assets/css/",
    js: distPath + "assets/js/",
    images: distPath + "assets/images/",
    fonts: distPath + "assets/fonts/"
  },
  src: {
    html: srcPath + "*.html",
    css: srcPath + "assets/scss/*.scss",
    js: srcPath + "assets/js/*.js",
    images: srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
  },
  watch: {
    html: srcPath + "**/*.html",
    css: srcPath + "assets/scss/**/*.scss",
    js: srcPath + "assets/js/**/*.js",
    images: srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
  },
  clean: "./" + distPath
}

function html() {
  return src(path.src.html, {base: srcPath})
    .pipe(plumber())
    .pipe(dest(path.build.html))
}
  
function css() {
  return src(path.src.css, {base: srcPath + "assets/scss/"})
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(cssnano({
      zindex: false,
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(removeComments())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(dest(path.build.css))
}

function js() {
  return src(path.src.js, {base: srcPath + "assets/js/"})
    .pipe(dest(path.build.js))
}

exports.html = html
exports.css = css
exports.js = js