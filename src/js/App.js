import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio sint neque quos eveniet excepturi obcaecati molestiae veniam? Exercitationem praesentium harum esse a totam quaerat deleniti suscipit perferendis corporis officiis.
                                Eaque deserunt veritatis aspernatur? Incidunt quia omnis repudiandae distinctio asperiores velit modi nesciunt repellendus obcaecati? Mollitia voluptatibus cumque, modi, ab obcaecati voluptatem suscipit, porro tempore voluptas rem aperiam ipsam animi.
                                Non harum alias nemo placeat atque dolorem neque optio autem earum dolores? Minus eaque rem, ut eligendi fuga perspiciatis impedit quas quo aliquid enim, quod deleniti? Dolore error tempore soluta!
                                Voluptatem deserunt obcaecati iusto possimus enim, reprehenderit quas assumenda! Dolores officia nisi autem minus repudiandae ducimus facilis placeat architecto qui deserunt. Illo corporis expedita excepturi, neque optio maiores nisi consequuntur.
                                Explicabo eius delectus praesentium minima, laborum dolor esse modi tempora natus consequuntur in doloremque est ab, voluptatum deserunt laudantium exercitationem ducimus odit dolorum! Hic recusandae libero corrupti ratione ab beatae?
                                Eos magni facere a! Unde ea accusamus amet non sequi dolorum, voluptates numquam quaerat deleniti fuga harum culpa provident beatae maiores vel nemo quod delectus doloremque praesentium, expedita iure. Exercitationem.
                                Mollitia hic voluptas consequatur dolore quae officia placeat. Nisi fugiat reiciendis molestiae enim quasi nihil, sint deserunt id ratione quibusdam dolore autem totam debitis sit ut inventore. Mollitia, iure modi.
                                Eveniet iure, eligendi recusandae magnam doloremque rem, perspiciatis consequatur rerum possimus, blanditiis distinctio! Voluptatum voluptate, harum, voluptates explicabo iste at vero et illum deserunt vel cum commodi perferendis natus. Deleniti.
                                Deleniti, cumque. Ipsam similique natus, itaque, enim perspiciatis dicta iste quasi magni eligendi impedit perferendis porro molestiae excepturi explicabo obcaecati ratione aliquid! Molestiae culpa cupiditate soluta, possimus tenetur aliquam obcaecati.
                                Dolorum dolores quibusdam quasi aspernatur, quod facere voluptate eveniet officia quia excepturi corrupti minima autem, est quas sed ex libero possimus exercitationem aperiam doloribus hic! Similique obcaecati esse exercitationem omnis?
                            </p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                            </p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit eveniet, quidem accusamus quod quas, vero sit rem iure blanditiis doloribus qui repellat deserunt, alias libero at magni nemo illo.
                            </p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
