'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { unlessProduction } from 'the-check'
import { eventHandlersFor, htmlAttributesFor, newId } from 'the-component-util'
import { TheIcon } from 'the-icon'
import { normalizeOptions, renderErrorMessage } from './helpers'

/**
 * Radio input of the-components
 */
class TheInputRadio extends React.Component {
  static Option ({checked, id, label, name, onChange, value}) {
    const icon = checked ? TheInputRadio.CHECKED_ICON : TheInputRadio.NORMAL_ICON
    return (
      <div aria-checked={checked}
           aria-label={typeof label === 'string' ? label : null}
           className={c('the-input-radio-item', {
             'the-input-radio-item-checked': checked,
           })}
           data-value={value}
           key={value}
           role='radio'
      >
        <input className='the-input-radio-radio'
               type='radio'
               {...{checked, id, name, onChange, value}}
        />
        <label className='the-input-radio-label'
               htmlFor={id}
        >
          <TheIcon className={c('the-input-radio-icon', icon)}/>
          {label}
        </label>
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.id = newId()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const {onChange, onUpdate, parser} = this.props
    const {name, value} = e.target
    onChange && onChange(e)
    onUpdate && onUpdate({[name]: parser(value)})
  }

  idFor (optionValue) {
    const {id = this.id} = this.props
    return [id, optionValue].join('-')
  }

  render () {
    const {props} = this
    const {
      asButton,
      asToggle,
      className,
      error,
      id = this.id,
      name,
      readOnly,
      value,
    } = props

    const options = normalizeOptions(props.options)

    unlessProduction(() => {
      if (asToggle && asButton) {
        throw new Error(`[TheButton] You cannot use \`asToggle\` and \`asButton\` at same time`)
      }
    })

    return (
      <div {...htmlAttributesFor(props, {except: ['id', 'className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-input-radio', className, {
             'the-input-as-button': asButton,
             'the-input-as-toggle': asToggle,
             'the-input-error': !!error,
           })}
           data-value={value}
           id={id}
      >
        {renderErrorMessage(error)}
        <div className={c('the-input-radio-inner')}>
          {
            readOnly ? (
              <span className='the-input-radio-readonly'>{options[value]}</span>
            ) : (
              Object.keys(options).map((optionValue) => (
                <TheInputRadio.Option checked={String(optionValue).trim() === String(value).trim()}
                                      id={this.idFor(optionValue)}
                                      key={optionValue}
                                      label={options[optionValue]}
                                      name={name}
                                      onChange={this.handleChange}
                                      value={optionValue}
                />
              ))
            )
          }
        </div>
      </div>
    )
  }
}

TheInputRadio.NORMAL_ICON = 'far fa-circle'
TheInputRadio.CHECKED_ICON = 'far fa-dot-circle'

TheInputRadio.propTypes = {
  /** Using button-like style */
  asButton: PropTypes.bool,
  /** Using toggle-like style */
  asToggle: PropTypes.bool,
  /** Input error */
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Name of input */
  name: PropTypes.string.isRequired,
  /** Handle for update */
  onUpdate: PropTypes.func.isRequired,
  /** Options */
  options: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** Value parser */
  parser: PropTypes.func,
  /** Value of input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

TheInputRadio.defaultProps = {
  asButton: false,
  asToggle: false,
  error: null,
  options: {},
  parser: String,
  role: 'radiogroup',
  value: '',
}

TheInputRadio.displayName = 'TheInputRadio'

export default TheInputRadio
