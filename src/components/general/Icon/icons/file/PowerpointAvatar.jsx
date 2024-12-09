import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function PowerpointAvatar({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
            <path
                d="M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                fill="#FFF1CC"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.971 18.675a6.944 6.944 0 0 1-12.262 3.748h3.05a.746.746 0 0 0 .746-.746v-3.002h8.466Zm-6.91 7.425a8.093 8.093 0 0 1-6.787-3.677H9.296a.746.746 0 0 1-.746-.746v-7.463c0-.412.334-.746.746-.746h3.05A8.1 8.1 0 1 1 19.06 26.1Zm-1.556-11.886v3.304h.88V11.09a6.928 6.928 0 0 0-4.584 2.378h2.958c.412 0 .746.334.746.746Zm8.482 3.304h-6.444v-6.444a6.944 6.944 0 0 1 6.444 6.444Zm-14.365 3.664v-2.126h1.174c.75 0 1.35-.191 1.799-.574.448-.383.673-.885.673-1.505 0-1.31-.782-1.966-2.347-1.966h-2.57v6.171h1.271Zm0-3.18v-2.05h1.118c.788 0 1.182.338 1.182 1.013 0 .691-.394 1.037-1.182 1.037h-1.118Z"
                fill="#FF8C00"
            />
        </svg>
    );
}

export default PowerpointAvatar;
