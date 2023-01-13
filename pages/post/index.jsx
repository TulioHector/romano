"use client"
import { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { PageContext } from '../../components/context';

const List = dynamic(() => import('./list'));

class Home extends PureComponent {
    static contextType = PageContext;

    constructor(props) {
        super(props);

        this.state = {
            hasMounted: false,
        };
    }

    async componentDidMount() {
        this.setState({ hasMounted: true, });
    }

    render() {
        return this.state.hasMounted && (
            <>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7" id='poastList'>
                            <List />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;