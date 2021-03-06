/**
 * @module helpers
 */
'use strict'

import path from 'path'
import React from 'react'
import { get } from 'the-window'
import url from 'url'

const {parse: parseUrl} = url

export const normalizeOptions = (options) => [].concat(options)
  .filter(Boolean)
  .reduce((normalized, value) => {
    const isObject = typeof value === 'object'
    return Object.assign(normalized,
      isObject ? value : {[value]: value}
    )
  }, {})

export function normalizeArrayValue (values, splitter = ',') {
  return [].concat(values)
    .filter(Boolean)
    .reduce((normzlied, value) => {
      if (typeof value === 'string') {
        return normzlied.concat(value.split(splitter))
      }
      return normzlied.concat(value)
    }, [])
}

export function renderErrorMessage (error) {
  if (!error) {
    return <span className='the-input-message the-input-message-empty'/>
  }
  if (typeof error === 'string') {
    error = {message: error}
  }
  return (
    <span className='the-input-message the-input-error-message'>{error.message}</span>
  )
}

export function renderWarningMessage (warning) {
  if (!warning) {
    return <span className='the-input-message the-input-message-empty'/>
  }
  if (typeof warning === 'string') {
    warning = {message: warning}
  }
  return (
    <span className='the-input-message the-input-warn-message'>{warning.message}</span>
  )
}

export async function readFile (file) {
  const FileReader = get('FileReader')
  return new Promise((resolve, reject) => {
    const reader = new FileReader
    reader.onerror = (err) => reject(err)
    reader.onload = (ev) => resolve(ev.target.result)
    reader.readAsDataURL(file)
  })
}

export function isImageUrl (src) {
  if (/^data:image/.test(src)) {
    return true
  }
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.svg',
    '.gif',
    '.png'
  ]
  const extname = path.extname(parseUrl(src).pathname)
  if (!extname) {
    return true
  }
  return !!~imageExtensions.indexOf(extname)
}

export function onOffBoolean (v) {
  if (typeof v === 'boolean') {
    return v ? 'on' : 'off'
  }
  return v
}

export default {
  isImageUrl,
  normalizeArrayValue,
  normalizeOptions,
  onOffBoolean,
  readFile,
  renderErrorMessage,
  renderWarningMessage,
}
