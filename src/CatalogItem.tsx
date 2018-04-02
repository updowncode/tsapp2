class CatalogItem extends React.Component<any,any>{  
    public render()  
    {  
        return (<div>  
                    <div className="goods">  
                        <a href="#">  
                            <div className="goods-img">  
                                <img src="images/goods/good.jpg" alt="" />  
                                <span className="goods-mark">  
                                    <span className="goods-discount">8.0折</span>  
                                    <span className="customers-num">3人团</span>  
                                </span>  
                            </div>  
                            <h2>【正宗哈密瓜】西州蜜17号1个19.9元（单果大于1.5千克）</h2>  
                            <p className="outline">【正宗哈密瓜】西州蜜，甜如蜜！椭圆浅麻绿，网纹细全密。甜不甜，大不大，一个重来有3斤！浓香溢，肉细腻，清甜爽口西州蜜！</p>  
                            <div className="goods-go">  
                                <div className="goods-go-icon"></div>  
                                <div className="goods-go-price">  
                                    <span>3人团</span>  
                                    <b>¥19.90</b>  
                                </div>  
                                <div className="goods-go-btn">去开团</div>  
                            </div>  
                        </a>  
                    </div>  
              </div>);  
    }  
}  