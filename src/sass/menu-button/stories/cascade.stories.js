export default { title: "Skin/Menu Button/Cascade" };

export const RTL = () => `
<div dir="rtl">
    <span class="menu-button">
    <button class="btn btn--secondary" type="button" aria-expanded="true" aria-haspopup="true">
        <span class="btn__cell">
            <span class="btn__text">Button</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div class="menu-button__item" role="menuitem" tabindex="0">
                <span>Item 10000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 20000</span>
            </div>
            <div class="menu-button__item" role="menuitem">
                <span>Item 30000</span>
            </div>
        </div>
    </div>
    </span>
</div>
`;

export const colour = () => `
<div style="color: purple">
    <span class="menu-button">
        <button class="btn" aria-expanded="true" aria-haspopup="true" style="background-color: #6a29b9; color: white" type="button">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__menu menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem" tabindex="0">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;

export const fontSize = () => `
<div style="font-size: 200%">
    <span class="menu-button">
        <button class="btn" type="button" aria-expanded="true" aria-haspopup="true">
            <span class="btn__cell">
                <span class="btn__text">Button</span>
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__menu menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                    <span>Item 10000</span>
                    <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                        <use href="#icon-tick-16"></use>
                    </svg>
                </div>
                <div class="menu-button__item" role="menuitemradio">
                    <span>Item 20000</span>
                    <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                        <use href="#icon-tick-16"></use>
                    </svg>
                </div>
                <div class="menu-button__item" role="menuitemradio">
                    <span>Item 30000</span>
                    <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                        <use href="#icon-tick-16"></use>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</div>
`;
