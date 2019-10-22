import App, {Container} from 'next/app'
import'antd/dist/antd.css'

class MyApp extends App {
    
    static async getInitialProps(appContext) {
        console.log('app init 每次都会执行')
        let pageProps
        if(appContext.Component.getInitialProps) {
            pageProps = await App.getInitialProps(appContext)
        }
        console.log(appContext)
        return {
            ...pageProps
        }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp