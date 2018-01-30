import React from 'react'
import styled from 'styled-components'

const ColorPickerWrapper = styled.span`
  position: relative;
  &:hover .color-palette {
    display: flex;
  }
`

const ColorIcon = styled.img`
  padding: 12px;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: 1;
  }
`

const ColorPalette = styled.div`
  display: none;
  flex-wrap: wrap;
  position: absolute;
  top: -154px;
  left: 4px;
  width: 160px;
  background-color: #fff;
  padding: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);              
`

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  margin: 4px;
  border-radius: 50%;
  border-width: 1px;
  border-color: ${({ hasBorder }) => hasBorder ? '#dedede' : 'transparent'};
  border-style: solid;
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
  cursor: pointer;
  transition: border-color 200ms;
  &:hover {
    border-color: #747474;
  }
`

const colors = [
  "#ff8a80", // red
  "#ffd180", // orange
  "#ffff8d", // yellow
  "#ccff90", // green
  "#a7ffeb", // cyan
  "#80d8ff", // blue
  "#82b1ff", // dark blue
  "#b388ff", // purple
  "#f8bbd0", // pink
  "#d7ccc8", // brown
  "#cfd8dc", // grey
]

class ColorPicker extends React.Component {
  render() {
    const { onSelectColor } = this.props
    return (
      <ColorPickerWrapper>
        <ColorIcon src="/color_palette_icon.svg" alt="color pallete icon" />
        <ColorPalette className="color-palette">
          <ColorCircle
            bgColor="#ffffff"
            onClick={() => onSelectColor("#ffffff")}
            hasBorder
          />
          {
            colors.map(color =>
              <ColorCircle
                key={color}
                bgColor={color}
                onClick={() => onSelectColor(color)}
              />
            )
          }

        </ColorPalette>
      </ColorPickerWrapper>
    )
  }
}

export default ColorPicker