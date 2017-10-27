the-input
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-input
[bd_travis_url]: http://travis-ci.org/the-labo/the-input
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-input.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-input
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-input.svg?token=
[bd_license_url]: https://github.com/the-labo/the-input/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-input
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-input.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-input.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-input
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-input.svg
[bd_npm_url]: http://www.npmjs.org/package/the-input
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-input.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Input of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-input --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

[Live Demo](https://the-labo.github.io/the-input/doc/demo/index.html#/) is hosted on GitHub Page

```javascript
'use strict'

import React from 'react'
import { TheInput, TheInputStyle } from 'the-input'

class ExampleComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {
      values: {}
    }
  }

  render () {
    const s = this
    const {values} = s.state
    const onUpdate = (values) => {
      s.setState({
        values: Object.assign({}, s.state.values, values)
      })
    }

    const {
      Text,
      Password,
      Search,
      TextArea,
      Radio,
      Checkbox,
      Select,
      Toggle,
      Slider,
      Range
    } = TheInput
    return (
      <div>
        <TheInputStyle/>

        <h3>Text</h3>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='value01'
              options={['Banana', 'Orange', 'Apple']}
        />

        <h3>Text with hint</h3>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='eg: hoge@example.com'
              pattern={Text.EMAIL_PATTERN}
              patternHint='Needs to be email'
        />

        <br/>

        <Search name='value01'
                value={values['value01']}
                onUpdate={onUpdate}
                placeholder='value01'
        />


        <br/>

        <Password name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
        />

        <br/>

        <TextArea name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
        />

        <hr/>

        <h3>Radio</h3>

        <div>
          <Radio name='value02'
                 value={values['value02']}
                 onUpdate={onUpdate}
                 options={['Car', 'Ship', 'Plane']}
          />
        </div>

        <div>

          <Radio name='value02'
                 value={values['value02']}
                 onUpdate={onUpdate}
                 options={['Car', 'Ship', 'Plane']}
                 asButton
          />

        </div>

        <hr/>

        <h3>Checkbox</h3>

        <div>
          <Checkbox name='value03'
                    value={values['value03']}
                    onUpdate={onUpdate}
                    options={['Green', 'Pink', 'Brown']}
          />
        </div>


        <h3>Select</h3>

        <div>
          <Select name='value04'
                  value={values['value04']}
                  onUpdate={onUpdate}
                  sorter={(a, b) => a.localeCompare(b)}
                  options={['Tea', 'Coffee', 'Water']}
          />
        </div>

        <h3>Toggle</h3>

        <div>
          <Toggle name='value05'
                  on={Boolean(values['value05'])}
                  onUpdate={onUpdate}
          />
        </div>

        <div>
          <Toggle name='value05'
                  on={Boolean(values['value05'])}
                  onTitle='This is on'
                  offTitle='This is off'
                  onUpdate={onUpdate}
          />
        </div>

        <div>
          <Slider name='value06'
                  value={values['value06'] || 10}
                  min={0}
                  max={100}
                  step={1}
                  onUpdate={onUpdate}
          />
        </div>

        <div>
          <Range name='value07'
                 value={values['value07'] || [10, 80]}
                 min={0}
                 max={100}
                 step={1}
                 onUpdate={onUpdate}
          />
        </div>

        <br/>
        <br/>
        <br/>

        <h3>Error</h3>

        <TheInput name='@'
                  type='hidden'
                  error='This is global error'/>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='value01'
              options={['Banana', 'Orange', 'Apple']}
              error='Something Wrong with This!'
        />

        <Password name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
                  error='Something Wrong with This!'
        />

        <TextArea name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
                  error='Something Wrong with This!'
                  onKeyDown={(e) => console.log('key down', e.keyCode)}
        />

        <Select name='value04'
                value={values['value04']}
                onUpdate={onUpdate}
                options={['Tea', 'Coffee', 'Water']}
                error='Something Wrong with This!'
        />

        <Radio name='value02'
               value={values['value02']}
               onUpdate={onUpdate}
               options={['Car', 'Ship', 'Plane']}
               error='Something Wrong with This!'
        />
        <Checkbox name='value03'
                  value={values['value03']}
                  onUpdate={onUpdate}
                  options={['Green', 'Pink', 'Brown']}
                  error='Something Wrong with This!'
        />
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheInput

Input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `type` | string  | Input type | `'text'` |
| `name` | string  | Name of input | `'_the'` |
| `value` | string  | Value of input | `''` |
| `onUpdate` | func  | Handle for update | `` |
| `error` | union  |  | `null` |
| `options` |   |  | `{}` |

### TheInputCheckbox

Checkbox input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `value` |   |  | `''` |
| `parser` |   |  | `String` |
| `error` |   |  | `null` |
| `options` |   |  | `{}` |
| `splitter` |   |  | `','` |

### TheInputPassword




### TheInputRadio

Radio input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `value` |   |  | `''` |
| `parser` |   |  | `String` |
| `error` |   |  | `null` |
| `options` |   |  | `{}` |

### TheInputRange

Range Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `name` | string  | Name of input | `` |
| `value` | arrayOf number | Value of input | `[0, 100]` |
| `onUpdate` | func  | Handle for update | `` |
| `error` | union  | Input error | `null` |
| `min` | number  | Min value | `0` |
| `max` | number  | Max value | `100` |
| `step` | number  | Value step | `0.1` |
| `barOnly` | bool  | Hides min/max value text | `false` |

### TheInputSearch




### TheInputSelect

Select Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `name` | string  | Name of input | `` |
| `value` | string  | Value of input | `''` |
| `onUpdate` | func  | Handle for update | `` |
| `onEnter` | func  | Handle for enter | `null` |
| `parser` | func  | Value parser | `String` |
| `sorter` | func  | Options sorter | `() => 1` |
| `error` | union  | Input error | `null` |
| `options` | union  | Options | `{}` |

### TheInputSlider

Slider Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `name` | string  | Name of input | `` |
| `value` | number  | Value of input | `0` |
| `onUpdate` | func  | Handle for update | `` |
| `error` | union  | Input error | `null` |
| `min` | number  | Min value | `0` |
| `max` | number  | Max value | `100` |
| `step` | number  | Value step | `0.1` |
| `barOnly` | bool  | Hides min/max value text | `false` |

### TheInputStyle

Style for TheInput

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |

### TheInputText

Text Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `type` | string  | Text type | `'text'` |
| `name` | string  | Name of input | `` |
| `value` | string  | Value of input | `''` |
| `onUpdate` | func  | Handle for update | `` |
| `onEnter` | func  | Handle for enter | `null` |
| `parser` | func  | Value parser | `String` |
| `matcher` | func  | Options parser | `(candidate, value) => {
  return candidate.match(value) || candidate.toLowerCase().match(value.toLowerCase())
}` |
| `pattern` | instanceOf  | Regexp for input | `null` |
| `patternWarning` | string  | Warning text when pattern failed | `null` |
| `error` | union  | Input error | `null` |
| `options` | union  | Options | `{}` |

### TheInputTextArea

TextArea Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `rows` | number  | TextArea rows | `5` |
| `name` | string  | Name of input | `` |
| `value` | string  | Value of input | `''` |
| `onUpdate` | func  | Handle for update | `` |
| `parser` | func  | Value parser | `String` |
| `error` |   |  | `null` |

### TheInputToggle

Toggle input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `on` |   |  | `false` |
| `onTitle` |   |  | `''` |
| `offTitle` |   |  | `''` |
| `error` |   |  | `null` |
| `width` |   |  | `64` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-input/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
