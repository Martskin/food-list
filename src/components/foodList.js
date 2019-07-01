import React from "react"
import { css } from "@emotion/core"

class FoodList extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        foods: this.props.foods,
      }
    }
    
    handleCheckboxClick = (checked, id, attribute) => {
      let foods = this.state.foods;
      foods[id][attribute] = checked;
      this.setState({ foods: foods });
    }

    handleButtonClick = () => {
      console.log(this.state.foods);
    }
    
    render() {
      const tokens = {
        color: {
          black: "000000",
          white: "#FFFFFF",
          neutral: {
            10: "#F8F8F8",
            20: "#E8E8E8",
            30: "#DCDCDC",
            40: "#C8C8C8",
            50: "#BEBEBE",
            60: "#B0B0B0",
            70: "#909090",
            80: "#808080",
            90: "#303030",
          },
          green: {
            71: "#D9FF6D",
          },
          blue: {
            61: "#3760FF",
          }
        },
        font: {
          family: {
            'sansSerif': "Helvetica Neue, Helvetica, Arial, sans-serif",
          },
          size: {
            xxs: 16 * .25,
            xs: 16 * .5,
            sm: 16 * .75,
            md: 16,
            lg: 16 * 1.125,
            xl: 16 * 1.5,
            xxl: 16 * 4,
          }
        },
        space: {
          xxs: 16 * .25,
          xs: 16 * .5,
          sm: 16 * .75,
          md: 16,
          lg: 16 * 2,
          xl: 16 * 3,
          xxl: 16 * 4,
          indent: 30,
        },
        animation: {
          timing: {
            default: '.3s',
          }
        } 
      }

      const renderRows = () => {
        const foods = this.state.foods;
      
        return (
          <tbody>
            {Object.keys(foods).map((id, i) => (
              <tr
                key={i}
                css={css({
                  backgroundColor: foods[id].isHealthy ? tokens.color.green[71] : tokens.color.neutral[10],
                  transition: `background-color, ${tokens.animation.timing.default} ease-out`,
                })}
              >
                <td>
                  <span
                    css={css({
                      paddingLeft: foods[id].isDelicious ? tokens.space.indent : 0,
                      transition: `padding-left ${tokens.animation.timing.default} ease-out`,
                    })}
                  >
                    {foods[id].label}
                  </span>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name={id + '-is-delicious'}
                      defaultChecked={foods[id].isDelicious}
                      onChange={(evt) => this.handleCheckboxClick(evt.target.checked, id, 'isDelicious')}
                    />
                    <span>Delicious</span>
                  </label>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name={id + '-is-healthy'}
                      defaultChecked={foods[id].isHealthy}
                      onChange={(evt) => this.handleCheckboxClick(evt.target.checked, id, 'isHealthy')}
                    />
                    <span>Healthy</span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        )
      }
      
      return (
        <div
          css={css({
              color: tokens.color.black,
              fontFamily: tokens.font.family.sansSerif, 
              fontSize: tokens.font.size.lg,
              lineHeight: 1,
          })}
        >
          <table
            css={css({
                border: `1px solid ${tokens.color.neutral[30]}`,
                borderCollapse: 'collapse',
                margin: `0 0 ${tokens.space.xl}px`,
                tableLayout: 'fixed',
                textAlign: 'left',
                textTransform: 'capitalize',
                width: '100%',
                'th, td': {
                  borderBottom: `1px solid ${tokens.color.neutral[30]}`,
                  padding: tokens.space.xs,
                },
                label: {
                  cursor: 'pointer',
                  display: 'block',
                  padding: tokens.space.sm,
                  input: {
                    cursor: 'pointer',
                  },
                  span: {
                    display: 'inline-block',
                    left: '-9999px',
                    paddingLeft: tokens.space.xxs,
                    position: 'absolute',
                    top: '-9999px',
                    verticalAlign: 'middle', 
                  }
                }
            })}
          >
            <thead>
              <tr
                css={css({
                  fontSize: tokens.font.size.xl,
                })}
              >
                <th>
                  Name
                </th>
                <th>
                  Delicious
                </th>
                <th>
                  Healthy
                </th>
              </tr>
            </thead>
            {renderRows()}
          </table>
          <button
            css={css({
              background: tokens.color.white,
              border: `1px solid ${tokens.color.blue[61]}`,
              borderRadius: '3px',
              color: tokens.color.blue[61],
              cursor: 'pointer',
              fontFamily: tokens.font.family.sansSerif, 
              fontSize: tokens.font.size.lg,
              fontWeight: 'bold',
              lineHeight: 1,
              margin: 0,
              overflow: 'visible',
              padding: `${tokens.space.sm}px ${tokens.space.md}px` ,
              textTransform: 'uppercase',
              width: 'auto',
              ':hover': {
                background: tokens.color.blue[61],
                color: tokens.color.white,
              }
            })}
            onClick={() => this.handleButtonClick()}
          >
            Console Log Foods
          </button>
        </div>
      )
    }
  
  }
  
  export default FoodList;
  