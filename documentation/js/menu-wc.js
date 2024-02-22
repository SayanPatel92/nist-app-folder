'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nist-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' : 'data-bs-target="#xs-components-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' :
                                            'id="xs-components-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' :
                                        'id="xs-injectables-links-module-AppModule-2b2413adb32855bae4b5dff939c15a82b6dd9848ce05fd1739a3f4d21c2fb4f46f7ff236d2a8bad5061e25b3856ec4f07b0c9d34dd28a5405f8c5b7212a41a9f"' }>
                                        <li class="link">
                                            <a href="injectables/XmlDataFetchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XmlDataFetchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/XmlDataFetchService.html" data-type="entity-link" >XmlDataFetchService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});