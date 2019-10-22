import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/Comp'

const A = ({router, name}) => <Link href="#"><a>AB {router.query.id}    {name}</a></Link>

A.getInitialProps =() => {
    return {
        name: 'tmc'
    }
}


export default withRouter(A)