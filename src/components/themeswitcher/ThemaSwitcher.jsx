import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'
import { useEffect } from 'react';

import { colors } from '../../styles.js';

const { firstTextColor, secondTextColor, firstBackgroudColor, secondBackgroundColor } = colors;

const ButtonsGroup = ({
    handlerTheme
}) => {
    useEffect(() => {
        const buttons = document.querySelectorAll('.ui.button i');
        buttons[0].classList.add('active');

        buttons.forEach((button) => {
            button.addEventListener('click', toggleActiveClass);
        });

        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', toggleActiveClass);
            });
        };
    }, []);

    const toggleActiveClass = (e) => {
        const buttons = document.querySelectorAll('.ui.button i');

        buttons.forEach((button) => {
            button.classList.remove('active');
        });

        e.target.classList.add('active');
        handlerTheme(e.target.getAttribute('data-name'));
    }

    return (
        <GroupButtonWrapper>
            <div className="ui buttons">
                <button className="ui button"><Icon name="dollar sign" data-name="first"/></button>
                <button className="ui button"><Icon name="euro sign" data-name="second"/></button>
                <button className="ui button"><Icon name="pound sign" data-name="third"/></button>
            </div>
        </GroupButtonWrapper>
    )
};

const GroupButtonWrapper = styled.div`

  display: inline-block;
  left:-55px;
  top: 50%;
  position: fixed;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .9s ease;

  /* body.foo & {

  } */
  
  .angle {
    font-size: 20px;
    &.left {display: none}
  }

  &:hover {
    left: 0;
    transition: all .9s ease;

    .angle {
        &.left {display: inline}
        &.right {display: none}
    }
  }

  .ui.buttons {
    flex-direction: column;

    .button {
        padding: 0;
        border-radius: 0;
        background: ${firstBackgroudColor};
        border: 1px solid ${secondTextColor};
        border-left: none;

        i {
            font-size: 20px;
            padding: 15px;
            margin: 0 !important;
            color: ${firstTextColor};
            display: inline-block;
            border-right: 20px solid ${firstBackgroudColor};

            &:hover {
              color: ${secondTextColor};
            }

            &.active {
                color: ${secondTextColor};
                border-right: 20px solid ${secondTextColor};
            }
        }
    }
  }
`;

export default ButtonsGroup;
