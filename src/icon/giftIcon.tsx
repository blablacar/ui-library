import React from 'react'
import BaseIcon from '_utils/icon'

// tslint:disable:max-line-length
export const GiftIcon = (props: Icon) => (
    <BaseIcon {...props}>
       <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-257.000000, -297.000000)">
                <g transform="translate(256.000000, 296.000000)">
                    <g>
                        <path
                            d="M19.826087,9.39130435 L19.826087,21.5652174 L4.17391304,21.5652174 L4.17391304,9.39130435 L19.826087,9.39130435 Z M2.43478261,5.91304348 L21.5652174,5.91304348 L21.5652174,9.39130435 L2.43478261,9.39130435 L2.43478261,5.91304348 Z" id="Shape"
                            stroke={props.iconColor}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />

                        <path
                            d="M6.7826087,4.17391304 C6.7826087,3.21304348 7.56086957,2.43478261 8.52173913,2.43478261 C11.093913,2.43478261 12,5.91304348 12,5.91304348 L8.52173913,5.91304348 C8.52173913,5.91304348 6.7826087,5.13478261 6.7826087,4.17391304 Z M17.2173913,4.17391304 C17.2173913,3.21304348 16.4391304,2.43478261 15.4782609,2.43478261 C12.906087,2.43478261 12,5.91304348 12,5.91304348 L15.4782609,5.91304348 C15.4782609,5.91304348 17.2173913,5.13478261 17.2173913,4.17391304 Z M13.7391304,5.91304348 L13.7391304,21.5652174 L10.2608696,21.5652174 L10.2608696,5.91304348 L13.7391304,5.91304348 Z"
                            stroke={props.iconColor}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </g>
            </g>
        </g>
    </BaseIcon>
)

GiftIcon.defaultProps = BaseIcon.defaultProps

export default React.memo(GiftIcon)
