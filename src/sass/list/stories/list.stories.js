export default { title: "Skin/List" };

export const base = () => `
<div class="list">
    <ul>
        <li>
            <div>
            <span class="list__body">
                    Text 0
                </span>
            </div>
        </li>
        <li>
            <div>
            <span class="list__body">
                    Text 1
                </span>
            </div>
            <div>
            <span class="list__body">
                    Text 2
                </span>
            </div>
        </li>
    </ul>
</div>
`;

export const withLeading = () => `
<div class="list">
    <ul>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-folder-16"/>
                    </svg>
                </span>
                <span class="list__body">
                    Text 0
                </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-file-16"/>
                    </svg>
                </span>
            <span class="list__body">
                    Text 1
                </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-key-16"/>
                    </svg>
                </span>
            <span class="list__body">
                    Text 2
                </span>
            </div>
        </li>
    </ul>
</div>

`;

export const multiLine = () => `
<div class="list">
    <ul>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-folder-16"/>
                    </svg>
                </span>
                <span class="list__body">
                    Text 0 with a long line that should wrap to the next line. This is testing to see how well the component wraps.
                </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-file-16"/>
                    </svg>
                </span>
            <span class="list__body">
                    Text 1 with a long line that should wrap to the next line. This is testing to see how well the component wraps, but also has an end item.
                </span>
                <span class="list__trailing">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-information-16"/>
                    </svg>
                </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-key-16"/>
                    </svg>
                </span>
            <span class="list__body">
                    Text 2, this one is normal.
                </span>
            </div>
        </li>
    </ul>
</div>

`;

export const action = () => `
<div class="list">
    <ul>
        <li>
            <button>
                Button
            </button>
        </li>
        <li>
            <a href="www.ebay.com">
                <span class="list__body">
                    Link
                </span>
                <span class="list__trailing">
                    <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                        <use href="#icon-chevron-right-16"/>
                    </svg>
                </span>
            </a>
        </li>
        <li>
            <div>
                <span class="list__body" id="switch-in-list">
                    Item 1 with an action
                </span>
                <span class="list__trailing">
                    <span class="switch">
                        <input
                            aria-labelledby="switch-in-list"
                            class="switch__control"
                            role="switch"
                            type="checkbox"
                            aria-checked="false"
                        />
                        <span class="switch__button"/>
                    </span>
                </span>
            </div>
        </li>
    </ul>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="list">
        <ul>
            <li>
                <button>
                    <span class="list__leading">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-folder-16"/>
                        </svg>
                    </span>

                    Button
                </button>
            </li>
            <li>
                <a href="www.ebay.com">
                    <span class="list__leading">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-folder-16"/>
                        </svg>
                    </span>
                    <span class="list__body">
                        Link
                    </span>
                    <span class="list__trailing">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-chevron-left-16"/>
                        </svg>
                    </span>
                </a>
            </li>
            <li>
                <div>
                    <span class="list__leading">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-folder-16"/>
                        </svg>
                    </span>
                    <span class="list__body">
                        Item 1 with an action
                    </span>
                    <span class="list__trailing">
                        <span class="switch">
                            <input
                                aria-label="Checkbox switch demo"
                                class="switch__control"
                                role="switch"
                                type="checkbox"
                                aria-checked="false"
                            >
                            <span class="switch__button"/>
                        </span>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>
`;
export const variableWidth = () =>
    `<div style="width: 200px">
    <div class="list">
        <ul>
            <li>
                <div>
                    <span class="list__leading">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-file-16"/>
                        </svg>
                    </span>
                    <span class="list__body">
                        Item 1
                    </span>
                </div>
            </li>
            <li>
                <div>
                    <span class="list__leading">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-file-16"/>
                        </svg>
                    </span>
                    <span class="list__body">
                        Item 2
                    </span>
                    <span class="list__trailing">
                        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                            <use href="#icon-money-back-guarantee-16"/>
                        </svg>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>`;

export const withDivider = () => `
<div class="list">
    <ul>
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-folder-16" />
                </svg>
                </span>
                <span class="list__body"> Item 1 </span>
            </div>
        </li>
        <hr />
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-file-16" />
                </svg>
                </span>
                <span class="list__body"> Item 2 </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-file-16" />
                </svg>
                </span>
                <span class="list__body"> Item 3 </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-file-16" />
                </svg>
                </span>
                <span class="list__body"> Item 4 </span>
            </div>
        </li>
        <hr />
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-key-16" />
                </svg>
                </span>
                <span class="list__body">
                    Item 5
                </span>
            </div>
        </li>
        <li>
            <div>
                <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-key-16" />
                </svg>
                </span>
                <span class="list__body">
                    Item 6
                </span>
            </div>
        </div>
`;

export const withRadio = () => `
<div class="list">
    <fieldset>
        <legend>Choose an Option</legend>
        <div>
            <span class="radio list__leading">
                <input
                    class="radio__control"
                    id="list-radio-1"
                    type="radio"
                    value="1"
                    name="list-radio-group"
                >
                <span class="radio__icon" hidden>
                    <svg
                        class="radio__unchecked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-unchecked-18"/>
                    </svg>
                    <svg
                        class="radio__checked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-checked-18"/>
                    </svg>
                </span>
            </span>
            <label class="list__body" for="list-radio-1">
                Option 1
            </label>
        </div>
        <div>
            <span class="radio list__leading">
                <input
                    class="radio__control"
                    id="list-radio-2"
                    type="radio"
                    value="2"
                    name="list-radio-group"
                >
                <span class="radio__icon" hidden>
                    <svg
                        class="radio__unchecked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-unchecked-18"/>
                    </svg>
                    <svg
                        class="radio__checked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-checked-18"/>
                    </svg>
                </span>
            </span>
            <label class="list__body" for="list-radio-2">
                Option 2
            </label>
        </div>
        <div>
            <span class="list__leading radio">
                <input
                    class="radio__control"
                    id="list-radio-3"
                    type="radio"
                    value="3"
                    name="list-radio-group"
                >
                <span class="radio__icon" hidden>
                    <svg
                        class="radio__unchecked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-unchecked-18"/>
                    </svg>
                    <svg
                        class="radio__checked"
                        height="18"
                        width="18"
                        aria-hidden="true"
                    >
                        <use href="#icon-radio-checked-18"/>
                    </svg>
                </span>
            </span>
            <label class="list__body" for="list-radio-3">
                Option 3
            </label>
        </div>
    </fieldset>
</div>
`;

// export const orderedList = () => `
//     <div class="list">
//         <ol>
//             <li>
//                 <div>
//                     <span class="list__body">
//                         Text 1
//                     </span>
//                 </div>
//             </li>
//             <li>
//                 <div>
//                     <span class="list__body">
//                         Text 2
//                     </span>
//                 </div>
//             </li>
//             <li>
//                 <div>
//                     <span class="list__body">
//                         Text 3
//                     </span>
//                 </div>
//             </li>
//         </ol>
//     </div>
// `;
