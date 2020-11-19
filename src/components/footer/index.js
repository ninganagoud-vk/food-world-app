import React from 'react';
import { InstagramFilled, YoutubeFilled, TwitterOutlined, FacebookFilled } from '@ant-design/icons';
import './style.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="row">
                <div className="col">
                    <h4>FOOD WORLD INC</h4>
                    <ul className="list-unstyled">
                        <li>343-321-0049</li>
                        <li>Moscow, Germany</li>
                        <li>123 street South North</li>
                        <li>Germany</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>FOOD WORLD INC</h4>
                    <ul className="list-unstyled">
                        <li>343-321-0049</li>
                        <li>ITPL, Bengalore</li>
                        <li>456 street South North</li>
                        <li>India</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>SOCIAL LINKS</h4>
                    <ul className="list-unstyled">
                        <li>            <a href="https://www.youtube.com" target="_blank"
                            className="social">
                            <YoutubeFilled style={{ color: "#eb3223", fontSize: '20px' }} />
                        </a>
                        </li>
                        <li>            <a href="https://www.facebook.com" target="_blank"
                            className="social">
                            <FacebookFilled style={{ color: "#4968ad", fontSize: '20px' }} />
                        </a>
                        </li>
                        <li>            <a href="https://www.twitter.com" target="_blank"
                            className="social">
                            <TwitterOutlined style={{ color: "#49a1eb", fontSize: '20px' }} />
                        </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank"
                                className="social">
                                <InstagramFilled style={{ color: "#C13584", fontSize: '20px' }} />
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
            <hr />
            <p>
                &copy;{new Date().getFullYear()} FOOD WORLD INC |
    All rights reserved | Terms Of Services | privacy
</p>
        </footer>
    )
}

export default Footer;