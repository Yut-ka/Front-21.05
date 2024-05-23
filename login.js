class Login extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        const STYLE = /*html*/ `
            <style>
                .login{
                    background: #3d505b;
                    font-size: 18px;
                    color: white;
                    padding: 12px 0;
                }
                .login-content{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    width: calc(100% / 9);
                    margin-left: auto;
                }
                .login-content img{
                    height: 27px;
                }
                @media (width <= 880px) {
                    .login{
                        padding-left: 25px;
                        padding-right: 25px;
                    }
                    .login-content{
                        justify-content: end;
                    }
                    .login-content img{
                        height: 20px;
                    }
                }
                @media (width <= 640px) {
                    .login-content{
                        justify-content: center;
                        width: 100%;
                        gap: 15px;
                    }
                    .login-content img{
                        height: 27px;
                    }
                    .login{
                        padding: 15px;
                        font-size: 20px;
                        font-weight: 700;
                        padding-top: 20px;
                    }
                }
            </style>
        `;
        this.innerHTML = /*html*/ `
        ${STYLE}
            <div class="login">
                <div class="login-content">
                    <img src="assets/img/log-in.png">
                    <div class="login-text">Войти</div>
                </div>
            </div>
        `;
    }
    setup() {
        console.log("log")
    }
}

customElements.define("login-elem", Login);


//