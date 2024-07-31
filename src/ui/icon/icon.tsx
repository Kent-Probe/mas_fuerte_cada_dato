type IconProps = {
   className: string
}
export default function Icon({ className }: IconProps) {
   return (
      <div className={className}>
         <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_3_93)">
               <path
                  d="M94.3224 48.6919L94.3224 41.078L86.7085 41.078L86.7085 60.0862H41.0781L41.0781 41.078L33.4641 41.078L33.4641 48.6919L25.8502 48.6919V60.0862L18.2362 60.0862V67.7002L25.8502 67.7002V79.0945L33.4641 79.0945L33.4641 86.7084L41.0781 86.7084L41.0781 67.7002H86.7085L86.7085 86.7084L94.3224 86.7084L94.3224 79.0945H101.936V67.7002L109.55 67.7002V60.0862L101.936 60.0862V48.6919H94.3224Z"
                  fill="white"
               />
            </g>
            <defs>
               <clipPath id="clip0_3_93">
                  <rect
                     width="90.3586"
                     height="90.3586"
                     fill="white"
                     transform="translate(0 63.8932) rotate(-45)"
                  />
               </clipPath>
            </defs>
         </svg>
      </div>
   )
}
