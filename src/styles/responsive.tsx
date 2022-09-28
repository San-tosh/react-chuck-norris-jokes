import {css} from 'styled-components'

//for smartphone 2022
export const mobile = (props: any) => {
    return css`
        @media only screen and (max-width: 767px) {
            ${props}
        }
    `
}

export const tablet = (props: any) => {
    return css`
        @media only screen and (max-width: 1023px) and (min-width: 768px) {
            ${props}
        }
    `
}

export const desktop = (props: any) => {
    return css`
        @media only screen and (min-width: 1024px) {
            ${props}
        }
    `
}

export const mediumDesktop = (props: any) => {
    return css`
        @media only screen and (min-width: 1440px) {
            ${props}
        }
    `
}

export const largeDesktop = (props: any) => {
    return css`
        @media only screen and (min-width: 2560px) {
            ${props}
        }
    `
}

