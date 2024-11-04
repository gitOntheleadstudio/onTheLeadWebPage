import React from "react"
import Benefits from "../components/benefits/Benefits"
import Banner from "../components/banner/Banner"
import Services from "../components/services/Services"
import Formulary from "../components/formulary/Formulary"
import Footer from "../components/footer/Footer"
import ProofOfValue from "../components/proofOfValue/ProofOfValue"
import NavbarC from "../components/navbarC/NavbarC"

export type iPages = {
    navigation: {
        button: string,
        button_link: string,
        item: {
            name: string,
            link: string
        }[]
    }
    hero_section: {
        slug: string,
        headline: string,
        subhead: string,
        subheadline2: string
        call_to_action: string,
        call_to_action_link: string,
        slider_banners: string[],
        spline_url: string,
    },
    clients: {
        headline: string,
        slug: string,
        slider: string[]
    },
    benefits: {
        slug: string,
        title: string,
        slider: [
            {
                description: string,
                subheadline: string,
                video: string
            }
        ]
    },
    services: {
        slug: string,
        headline: string,
        slider: [
            {
                description: string,
                subheadline: string,
                video: string
            }
        ]
    },
    formulary: {
        slug: string,
        headline: string,
        slider: [
            {
                avatar_image: string,
                name: string,
                review: string,
                role: string
            }
        ]
    },
    footer: {
        button_text: string,
        button_url: string,
        fa_link: string,
        ig_link: string
        headline: string,
        subheadline: string,
        mail: string,
        wsp: string
    }
}


export const bannerConv = (data: iPages) => {
    const { headline, call_to_action, call_to_action_link, slider_banners, spline_url, subhead, subheadline2 } = data.hero_section
    return {
        title: headline,
        subtitle1: subhead,
        subtitle2: subheadline2,
        buttonText: call_to_action,
        pictures: slider_banners,
        splineUrl: spline_url,
        buttonUrl: call_to_action_link
    } as React.ComponentProps<typeof Banner>
}

export const benefitsConv = (data: iPages) => {
    const { title: header, slider } = data.benefits
    const slider1 = slider.map(({ subheadline, description, video }) => {
        return { title: subheadline, text: description, video }
    })
    return {
        title: header,
        slider: slider1
    } as React.ComponentProps<typeof Benefits>
}

export const ServicesConv = (data: iPages) => {
    const { headline, slider } = data.services
    const slider1 = slider.map(({ subheadline, description, video }) => {
        return { title: subheadline, desc: description, video }
    })
    return {
        title: headline,
        slider: slider1
    } as React.ComponentProps<typeof Services>
}

export const FormularyConv = (data: iPages) => {
    const { headline, slider } = data.formulary
    const slider1 = slider.map(({ name, role, avatar_image, review }) => {
        return { name, role, avatar: avatar_image, text: review }
    })
    return {
        title: headline,
        reviews: slider1
    } as React.ComponentProps<typeof Formulary>
}

export const FooterConv = (data: iPages) => {
    const { headline, subheadline, button_text, button_url, fa_link, ig_link, mail, wsp } = data.footer
    return {
        title: headline,
        subtitle: subheadline,
        button: button_text,
        faLink: fa_link,
        igLink: ig_link,
        wsp: wsp,
        mail: mail,
        buttonUrl: button_url
    } as React.ComponentProps<typeof Footer>
}

export const PofConv = (data: iPages) => {
    const { headline, slider } = data.clients
    return {
        title: headline,
        clientsLogos: slider
    } as React.ComponentProps<typeof ProofOfValue>
}

export const NavbarConv = (data: iPages) => {
    const { button, button_link, item } = data.navigation
    const menu = item.map(({ name, link }) => {
        return { name, url: link }
    })
    return {
        button,
        buttonUrl: button_link,
        menu: menu
    } as React.ComponentProps<typeof NavbarC>
}