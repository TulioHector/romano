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
                <div className="mb-4">
                    <div className="container">
                        <div className="row" id='poastList'>
                            <List />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;