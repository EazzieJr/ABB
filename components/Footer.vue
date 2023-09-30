<template>
	<footer>
		<div class="Container constraint">
			<div class="Top col-center">
				<div class="Texts">
					<h5>
						Let's Work!
					</h5>

					<p>
						If you've got a project in mind, don't hesitate to <br class="md:hidden"> reach out to me!
					</p>
				</div>

				<button class="ContactMe">
					Contact Me
				</button>
			</div>

			<div class="Bottom md:between">
				<span class="Copyright">
					© {{new Date().getFullYear()}} ABB Inc. All Rights Reserved
				</span>

				<div class="Links center md:start">
					<a v-for="link in links" :key="link.name" :href="`https://${link.link}`" target="blank" class="Link">
						<img :src="`/svg/${link.name}.svg`" :alt="`An incon representing ${link.name}`">
					</a>
				</div>
			</div>
		</div>

		<div class="SvgBg">
			<svg class="small" viewBox="0 0 390 425" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_325_1323)">
				<g opacity="0.7" filter="url(#filter0_b_325_1323)">
				<rect width="59.5779" height="59.5779" rx="11.9156" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 338.343 131)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M373.58 158.521C372.887 163.42 364.165 168.875 363.031 168.86C361.898 168.845 354.796 163.183 355.489 158.284C355.635 157.242 356.105 156.229 356.833 155.386C357.562 154.542 358.512 153.91 359.554 153.577C360.596 153.243 361.678 153.224 362.65 153.523C363.622 153.822 364.437 154.424 364.982 155.245C365.538 154.662 366.207 154.194 366.938 153.877C367.67 153.56 368.445 153.402 369.205 153.415C369.873 153.423 370.517 153.561 371.099 153.822C371.681 154.083 372.19 154.462 372.596 154.936C373.003 155.411 373.299 155.971 373.468 156.587C373.637 157.202 373.675 157.859 373.58 158.521Z" fill="white"/>
				</g>
				<rect x="0.512297" y="0.597707" width="58.3863" height="58.3863" rx="11.3198" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 338.427 130.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.19156"/>
				</g>
				<g opacity="0.4" filter="url(#filter1_b_325_1323)">
				<rect width="56.7331" height="56.7331" rx="11.3466" transform="matrix(0.99863 -0.052336 0.180862 0.983508 161 -17.0308)" fill="white" fill-opacity="0.02"/>
				<g opacity="0.3">
				<path d="M190.682 4.89453L201.252 4.34059" stroke="white" stroke-width="1.13466" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M191.536 9.53662L202.106 8.98268" stroke="white" stroke-width="1.13466" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M192.389 14.1787L202.959 13.6248" stroke="white" stroke-width="1.13466" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M186.72 6.25048C187.371 6.21638 187.803 5.66915 187.685 5.02821C187.567 4.38728 186.944 3.89535 186.293 3.92946C185.642 3.96356 185.21 4.51079 185.328 5.15172C185.446 5.79266 186.069 6.28459 186.72 6.25048Z" stroke="white" stroke-width="1.13466" stroke-miterlimit="10"/>
				<path d="M187.573 10.8926C188.224 10.8585 188.656 10.3112 188.538 9.6703C188.421 9.02937 187.797 8.53744 187.147 8.57155C186.496 8.60565 186.064 9.15288 186.182 9.79381C186.3 10.4347 186.923 10.9267 187.573 10.8926Z" stroke="white" stroke-width="1.13466" stroke-miterlimit="10"/>
				<path d="M188.427 15.5347C189.078 15.5006 189.51 14.9533 189.392 14.3124C189.275 13.6715 188.651 13.1795 188.001 13.2136C187.35 13.2477 186.918 13.795 187.036 14.4359C187.154 15.0768 187.777 15.5688 188.427 15.5347Z" stroke="white" stroke-width="1.13466" stroke-miterlimit="10"/>
				</g>
				<rect x="0.669162" y="0.528283" width="55.5984" height="55.5984" rx="10.7793" transform="matrix(0.99863 -0.052336 0.180862 0.983508 160.905 -16.987)" stroke="white" stroke-opacity="0.1" stroke-width="1.13466"/>
				</g>
				<g opacity="0.2" filter="url(#filter2_b_325_1323)">
				<rect width="38.9157" height="38.9157" rx="7.78314" transform="matrix(0.999914 0.0130896 0.164531 0.986372 40.6182 34.6812)" fill="white" fill-opacity="0.07"/>
				<path d="M67.3507 55.3801C67.3028 55.6269 67.2456 55.8655 67.1532 56.0877L67.7291 56.582C68.2483 57.0277 68.3684 57.7474 67.9959 58.1814C67.6234 58.6154 66.8938 58.6059 66.3745 58.1602L65.7987 57.6659C65.593 57.7909 65.3658 57.8837 65.1292 57.9683L65.2372 58.6161C65.3413 59.2398 64.9146 59.737 64.2823 59.7287L64.1444 59.7269C63.5121 59.7186 62.9174 59.2081 62.8133 58.5844L62.7053 57.9366C62.5217 57.8544 62.28 57.7635 61.9317 57.6153L61.5186 58.0966C61.1461 58.5306 60.4165 58.5211 59.8972 58.0754C59.378 57.6297 59.258 56.91 59.6305 56.476L60.0436 55.9947C59.8765 55.769 59.7392 55.5279 59.6087 55.2788L58.9521 55.2702C58.3197 55.2619 57.725 54.7514 57.6209 54.1277L57.5983 53.9917C57.4942 53.368 57.9209 52.8708 58.5532 52.8791L59.2099 52.8877C59.2577 52.641 59.315 52.4023 59.4073 52.1801L58.8314 51.6858C58.3122 51.2402 58.1921 50.5204 58.5646 50.0864C58.9372 49.6524 59.6668 49.662 60.186 50.1077L60.7619 50.6019C60.9675 50.477 61.1947 50.3842 61.4314 50.2995L61.3233 49.6518C61.2193 49.028 61.6459 48.5309 62.2783 48.5392L62.4161 48.541C63.0484 48.5492 63.6432 49.0597 63.7472 49.6835L63.8553 50.3312C64.1213 50.4225 64.3805 50.5216 64.6288 50.6526L65.0419 50.1712C65.4144 49.7372 66.1441 49.7468 66.6633 50.1925C67.1825 50.6381 67.3026 51.3578 66.9301 51.7918L66.5169 52.2732C66.684 52.4988 66.8213 52.74 66.9518 52.9891L67.6085 52.9976C68.2408 53.0059 68.8355 53.5164 68.9396 54.1402L68.9623 54.2761C69.0663 54.8999 68.6396 55.397 68.0073 55.3887L67.3507 55.3801Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.583736" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M63.5426 55.7293C64.4381 55.741 65.0445 55.0344 64.8972 54.1511C64.7498 53.2678 63.9045 52.5422 63.009 52.5305C62.1136 52.5188 61.5071 53.2253 61.6545 54.1087C61.8018 54.992 62.6472 55.7176 63.5426 55.7293Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.583736" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="0.453152" y="0.388948" width="38.1374" height="38.1374" rx="7.39399" transform="matrix(0.999914 0.0130896 0.164531 0.986372 40.5542 34.6805)" stroke="white" stroke-opacity="0.1" stroke-width="0.778314"/>
				</g>
				<g opacity="0.8" filter="url(#filter3_b_325_1323)">
				<rect width="58.6217" height="58.6217" rx="11.7243" transform="matrix(0.999914 0.0130896 0.164531 0.986372 4.26562 157)" fill="white" fill-opacity="0.07"/>
				<path d="M36.7579 191.081C40.8045 191.134 43.5452 187.941 42.8793 183.949C42.2135 179.958 38.3933 176.679 34.3466 176.626C30.3 176.573 27.5593 179.766 28.2252 183.758C28.891 187.749 32.7113 191.028 36.7579 191.081Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.879326" stroke-miterlimit="10"/>
				<path d="M41.572 189.041L48.3515 194.839" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.879326" stroke-miterlimit="10" stroke-linecap="round"/>
				<path d="M35.6159 187.376C33.9447 187.438 32.2927 186.155 31.9299 184.491" stroke="#B5B5B5" stroke-width="1.46554" stroke-miterlimit="10" stroke-linecap="round"/>
				<rect x="0.682618" y="0.585902" width="57.4493" height="57.4493" rx="11.1381" transform="matrix(0.999914 0.0130896 0.164531 0.986372 4.16928 156.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.17243"/>
				</g>
				<g opacity="0.15" filter="url(#filter4_b_325_1323)">
				<rect width="47.1243" height="47.1243" rx="9.42487" transform="matrix(0.999914 0.0130896 0.164531 0.986372 91.2676 222.584)" fill="white" fill-opacity="0.07"/>
				<path d="M117.574 239.358C120.283 239.393 122.844 241.591 123.29 244.264L124.259 250.074L114.442 249.946L113.473 244.135C113.027 241.463 114.864 239.322 117.574 239.358Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.706865" stroke-linejoin="round"/>
				<path d="M116.937 250.22C117.16 251.556 118.44 252.655 119.795 252.673C121.149 252.691 122.068 251.62 121.845 250.284" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="0.706865" stroke-miterlimit="10"/>
				<rect x="0.548737" y="0.47099" width="46.1819" height="46.1819" rx="8.95362" transform="matrix(0.999914 0.0130896 0.164531 0.986372 91.1901 222.584)" stroke="white" stroke-opacity="0.1" stroke-width="0.942487"/>
				</g>
				<g opacity="0.15">
				<rect width="48.2391" height="48.2391" rx="9.50164" transform="matrix(0.999914 -0.0130896 -0.0989724 0.99509 270.774 215.631)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M291.41 232.414L290.998 236.556C290.952 237.022 290.531 237.408 290.063 237.414L285.9 237.469C285.381 237.475 285.018 237.023 285.145 236.514C285.802 234.018 287.981 232.019 290.524 231.579C291.043 231.488 291.462 231.897 291.41 232.414Z" fill="white"/>
				<path d="M284.768 240.132C284.864 243.954 287.908 246.859 291.928 246.696C295.948 246.534 299.597 243.178 300.104 239.195C300.611 235.212 297.979 231.93 294.179 231.498C293.674 231.445 293.184 231.849 293.133 232.357C293.031 233.382 292.861 235.094 292.718 236.534C292.578 237.94 291.324 239.09 289.911 239.108L285.715 239.163C285.204 239.17 284.759 239.624 284.768 240.132Z" fill="white"/>
				</g>
				<rect x="-0.658494" y="-0.71774" width="49.7009" height="49.7009" rx="10.2325" transform="matrix(0.999914 -0.0130896 -0.0989724 0.99509 270.703 215.619)" stroke="white" stroke-opacity="0.1" stroke-width="1.46179"/>
				</g>
				</g>
				<defs>
				<filter id="filter0_b_325_1323" x="324.042" y="125.042" width="79.8313" height="71.6861" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.97889"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_1323"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_1323" result="shape"/>
				</filter>
				<filter id="filter1_b_325_1323" x="155.327" y="-25.6733" width="78.2629" height="70.1132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.83665"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_1323"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_1323" result="shape"/>
				</filter>
				<filter id="filter2_b_325_1323" x="36.7266" y="30.7896" width="53.0983" height="46.6777" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="1.94579"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_1323"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_1323" result="shape"/>
				</filter>
				<filter id="filter3_b_325_1323" x="-1.59655" y="151.138" width="79.9861" height="70.3147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.93109"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_1323"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_1323" result="shape"/>
				</filter>
				<filter id="filter4_b_325_1323" x="86.5551" y="217.872" width="64.2986" height="56.524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.35622"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_1323"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_1323" result="shape"/>
				</filter>
				<clipPath id="clip0_325_1323">
				<rect width="390" height="425" fill="white"/>
				</clipPath>
				</defs>
			</svg>
			
			<svg class="big" viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_218_1118)">
				<g opacity="0.8" filter="url(#filter0_b_218_1118)">
				<rect width="139.248" height="139.248" rx="27.8496" transform="matrix(0.999914 0.0130896 0.164531 0.986372 -32 73)" fill="white" fill-opacity="0.07"/>
				<path d="M45.1815 153.956C54.7938 154.081 61.3039 146.497 59.7222 137.015C58.1406 127.533 49.0661 119.744 39.4539 119.618C29.8416 119.492 23.3315 127.077 24.9132 136.559C26.4948 146.041 35.5693 153.83 45.1815 153.956Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="2.08872" stroke-miterlimit="10"/>
				<path d="M56.6164 149.109L72.7202 162.882" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="2.08872" stroke-miterlimit="10" stroke-linecap="round"/>
				<path d="M42.4686 145.154C38.499 145.302 34.5749 142.253 33.7132 138.301" stroke="#B5B5B5" stroke-width="3.4812" stroke-miterlimit="10" stroke-linecap="round"/>
				<rect x="1.62147" y="1.39173" width="136.463" height="136.463" rx="26.4571" transform="matrix(0.999914 0.0130896 0.164531 0.986372 -32.2288 72.9977)" stroke="white" stroke-opacity="0.1" stroke-width="2.78496"/>
				</g>
				<g opacity="0.2" filter="url(#filter1_b_218_1118)">
				<rect width="73.0624" height="73.0624" rx="14.6125" transform="matrix(0.999914 0.0130896 0.164531 0.986372 268 165)" fill="white" fill-opacity="0.07"/>
				<path d="M318.189 203.86C318.099 204.323 317.992 204.771 317.819 205.189L318.9 206.117C319.875 206.953 320.1 208.305 319.401 209.119C318.701 209.934 317.331 209.916 316.357 209.08L315.275 208.152C314.889 208.386 314.463 208.56 314.019 208.719L314.221 209.936C314.417 211.107 313.616 212.04 312.428 212.024L312.17 212.021C310.983 212.005 309.866 211.047 309.671 209.876L309.468 208.66C309.123 208.506 308.669 208.335 308.015 208.057L307.24 208.96C306.54 209.775 305.171 209.757 304.196 208.92C303.221 208.084 302.996 206.732 303.695 205.918L304.471 205.014C304.157 204.59 303.899 204.138 303.654 203.67L302.421 203.654C301.234 203.638 300.117 202.68 299.922 201.509L299.88 201.254C299.684 200.082 300.485 199.149 301.672 199.165L302.905 199.181C302.995 198.718 303.103 198.27 303.276 197.852L302.195 196.924C301.22 196.088 300.995 194.736 301.694 193.922C302.393 193.107 303.763 193.125 304.738 193.961L305.819 194.889C306.205 194.655 306.632 194.481 307.076 194.322L306.873 193.105C306.678 191.934 307.479 191.001 308.666 191.017L308.925 191.02C310.112 191.036 311.229 191.994 311.424 193.165L311.627 194.381C312.126 194.552 312.613 194.739 313.079 194.984L313.855 194.081C314.554 193.266 315.924 193.284 316.899 194.121C317.874 194.957 318.099 196.309 317.4 197.123L316.624 198.027C316.938 198.451 317.195 198.903 317.44 199.371L318.673 199.387C319.86 199.403 320.977 200.361 321.172 201.532L321.215 201.787C321.41 202.959 320.609 203.892 319.422 203.876L318.189 203.86Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M311.04 204.516C312.721 204.538 313.859 203.212 313.583 201.553C313.306 199.895 311.719 198.533 310.038 198.511C308.357 198.489 307.218 199.815 307.495 201.473C307.771 203.132 309.359 204.494 311.04 204.516Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="0.850772" y="0.730231" width="71.6012" height="71.6012" rx="13.8819" transform="matrix(0.999914 0.0130896 0.164531 0.986372 267.88 164.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.46125"/>
				</g>
				<g opacity="0.1" filter="url(#filter2_b_218_1118)">
				<rect width="73.0624" height="73.0624" rx="14.6125" transform="matrix(0.999914 0.0130896 0.164531 0.986372 140 346)" fill="white" fill-opacity="0.07"/>
				<path d="M180.786 372.005C184.987 372.06 188.957 375.468 189.648 379.611L191.151 388.62L175.931 388.421L174.428 379.412C173.737 375.268 176.585 371.95 180.786 372.005Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linejoin="round"/>
				<path d="M179.799 388.846C180.144 390.918 182.129 392.621 184.23 392.649C186.33 392.676 187.754 391.017 187.409 388.945" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-miterlimit="10"/>
				<rect x="0.850772" y="0.730231" width="71.6012" height="71.6012" rx="13.8819" transform="matrix(0.999914 0.0130896 0.164531 0.986372 139.88 345.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.46125"/>
				</g>
				<g filter="url(#filter3_b_218_1118)">
				<rect width="100" height="100" rx="20" transform="matrix(1 0 0.185667 0.982613 -31.6484 426.77)" fill="white" fill-opacity="0.03"/>
				<path d="M18.0793 483.666L23.7415 465.641C24.2215 464.108 26.4261 464.108 27.4853 465.641L40.0557 483.625C41.3392 485.465 39.6185 487.365 37.6329 486.323L29.9215 482.277C29.1826 481.888 28.3714 481.888 27.7792 482.277L21.5424 486.364C19.9507 487.406 17.5155 485.526 18.0831 483.687L18.0793 483.666Z" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="1.18567" y="0.982613" width="98" height="98" rx="19" transform="matrix(1 0 0.185667 0.982613 -31.8309 426.787)" stroke="white" stroke-opacity="0.05" stroke-width="2"/>
				</g>
				<g opacity="0.7" filter="url(#filter4_b_218_1118)">
				<rect width="134.721" height="134.721" rx="26.9441" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1348.87 87.8438)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M1428.55 150.075C1426.98 161.153 1407.25 173.487 1404.69 173.454C1402.13 173.42 1386.07 160.617 1387.64 149.539C1387.97 147.182 1389.03 144.892 1390.68 142.985C1392.32 141.078 1394.47 139.649 1396.83 138.894C1399.19 138.14 1401.63 138.098 1403.83 138.773C1406.03 139.449 1407.87 140.809 1409.1 142.666C1410.36 141.348 1411.87 140.29 1413.53 139.573C1415.18 138.857 1416.93 138.5 1418.65 138.529C1420.16 138.546 1421.62 138.859 1422.94 139.45C1424.25 140.04 1425.4 140.896 1426.32 141.969C1427.24 143.041 1427.91 144.309 1428.29 145.7C1428.67 147.091 1428.76 148.578 1428.55 150.075Z" fill="white"/>
				</g>
				<rect x="1.15843" y="1.35156" width="132.026" height="132.026" rx="25.5969" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1349.05 87.8419)" stroke="white" stroke-opacity="0.1" stroke-width="2.69441"/>
				</g>
				<g opacity="0.5" filter="url(#filter5_b_218_1118)">
				<rect width="65.808" height="65.808" rx="13.1616" transform="matrix(0.999657 -0.0261769 -0.115457 0.993312 1396.21 435.086)" fill="white" fill-opacity="0.07"/>
				<g opacity="0.3">
				<path d="M1426.25 474.574L1433.25 470.454L1434.54 459.339L1434.97 455.63L1428 459.51L1421.91 455.972L1421.48 459.681L1420.19 470.796L1421.48 459.681L1421.91 455.972L1414.96 459.851L1413.66 470.967L1413.23 474.676L1420.19 470.796L1426.25 474.574L1426.71 470.626L1428 459.51L1426.71 470.626" fill="white"/>
				</g>
				<rect x="0.581874" y="0.636452" width="64.4918" height="64.4918" rx="12.5035" transform="matrix(0.999657 -0.0261769 -0.115457 0.993312 1396.28 435.106)" stroke="white" stroke-opacity="0.1" stroke-width="1.31616"/>
				</g>
				<g opacity="0.4" filter="url(#filter6_b_218_1118)">
				<rect width="100" height="100" rx="20" transform="matrix(0.99863 -0.052336 0.180862 0.983508 661 -10.8281)" fill="white" fill-opacity="0.02"/>
				<g opacity="0.3">
				<path d="M713.319 27.8184L731.95 26.842" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M714.824 36.0005L733.455 35.0241" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M716.328 44.1831L734.959 43.2067" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M706.335 30.2084C707.482 30.1482 708.244 29.1837 708.036 28.0539C707.828 26.9242 706.73 26.0571 705.583 26.1172C704.435 26.1773 703.674 27.1419 703.882 28.2716C704.089 29.4014 705.188 30.2685 706.335 30.2084Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
				<path d="M707.84 38.3905C708.987 38.3304 709.748 37.3658 709.54 36.2361C709.333 35.1063 708.234 34.2392 707.087 34.2994C705.94 34.3595 705.179 35.324 705.386 36.4538C705.594 37.5835 706.693 38.4506 707.84 38.3905Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
				<path d="M709.344 46.5731C710.491 46.513 711.253 45.5484 711.045 44.4187C710.837 43.2889 709.739 42.4219 708.592 42.482C707.445 42.5421 706.683 43.5067 706.891 44.6364C707.099 45.7661 708.197 46.6332 709.344 46.5731Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
				</g>
				<rect x="1.17949" y="0.931172" width="98" height="98" rx="19" transform="matrix(0.99863 -0.052336 0.180862 0.983508 660.833 -10.751)" stroke="white" stroke-opacity="0.1" stroke-width="2"/>
				</g>
				<g opacity="0.12">
				<rect width="111" height="111" rx="20" transform="matrix(1 0 0.277482 0.960731 307 398)" fill="white" fill-opacity="0.03"/>
				<path d="M391.383 455.804H376.404C373.05 455.804 369.567 453.122 368.607 449.8L365.717 439.792C364.757 436.47 366.691 433.788 370.045 433.788H383.837C387.191 433.788 390.674 436.47 391.633 439.792L395.102 451.801L398.024 457.806L391.383 455.804Z" stroke="white" stroke-opacity="0.5" stroke-width="2.5" stroke-linejoin="round"/>
				<path d="M384.591 455.804L386.713 463.15C387.51 465.912 385.908 468.154 383.116 468.154H370.637L366.075 469.815L365.609 464.811L362.719 454.804C361.921 452.042 363.544 449.8 366.315 449.8H368.628" stroke="white" stroke-opacity="0.5" stroke-width="2.5" stroke-linejoin="round"/>
				<rect x="-1.27748" y="-0.960731" width="113" height="113" rx="21" transform="matrix(1 0 0.277482 0.960731 307.267 397.963)" stroke="white" stroke-opacity="0.05" stroke-width="2"/>
				</g>
				<g opacity="0.12">
				<rect width="83" height="83" rx="20" transform="matrix(0.997859 0.0654031 0.180862 0.983508 687 490)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M727.932 542.083L722.537 541.729L724.315 551.398L729.71 551.751L727.932 542.083Z" fill="white"/>
				<path d="M741.572 552.46L738.002 533.258L732.646 532.907L736.176 552.107L741.572 552.46Z" fill="white"/>
				<path d="M748.477 526.713L743.082 526.36L747.971 552.949L753.367 553.303L748.477 526.713Z" fill="white"/>
				<path d="M725.554 532.161C725.333 532.147 725.105 532.063 724.904 531.923C724.702 531.782 724.537 531.592 724.433 531.381C724.328 531.169 724.29 530.946 724.323 530.745C724.357 530.543 724.46 530.374 724.618 530.261L742.474 517.55C742.673 517.416 742.939 517.379 743.215 517.446C743.49 517.513 743.755 517.679 743.95 517.909C744.146 518.138 744.258 518.413 744.261 518.674C744.265 518.935 744.16 519.162 743.97 519.305L726.114 532.018C725.961 532.126 725.766 532.176 725.554 532.161Z" fill="white"/>
				<path d="M724.419 535.24C726.138 535.353 727.279 534.07 726.967 532.376C726.655 530.682 725.009 529.217 723.29 529.104C721.571 528.991 720.43 530.273 720.742 531.968C721.053 533.662 722.699 535.127 724.419 535.24Z" fill="white"/>
				<path d="M745.274 520.441C746.993 520.554 748.134 519.271 747.822 517.577C747.511 515.883 745.865 514.418 744.146 514.305C742.426 514.192 741.285 515.475 741.597 517.169C741.909 518.863 743.555 520.328 745.274 520.441Z" fill="white"/>
				</g>
				<rect x="-1.17872" y="-1.04891" width="85" height="85" rx="21" transform="matrix(0.997859 0.0654031 0.180862 0.983508 687.187 490.06)" stroke="white" stroke-opacity="0.05" stroke-width="2"/>
				</g>
				<g opacity="0.1">
				<g clip-path="url(#clip1_218_1118)">
				<rect width="66" height="66" rx="20" transform="matrix(0.994522 -0.104528 -0.13191 0.991262 1076.71 367.899)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M1104.59 394.168C1106.88 393.928 1108.98 391.884 1109.28 389.602C1109.59 387.321 1107.98 385.667 1105.69 385.908C1103.4 386.148 1101.3 388.192 1101 390.474C1100.69 392.755 1102.3 394.409 1104.59 394.168Z" fill="white"/>
				<path d="M1092.31 409.713C1092.35 409.362 1092.42 409.009 1092.51 408.674C1093.19 405.711 1095.04 402.991 1097.48 401.065C1099.4 399.56 1101.68 398.547 1104.04 398.298C1106.4 398.05 1108.47 398.606 1110.04 399.745C1110.37 399.995 1110.69 400.247 1110.97 400.543C1112.39 402.023 1113.2 404.096 1113.1 406.509C1113.1 406.835 1113.07 407.184 1113.03 407.535" fill="white"/>
				<path d="M1095.41 401.283C1092.97 403.209 1091.11 405.929 1090.43 408.892L1082.08 409.769C1082.69 405.205 1086.89 401.119 1091.47 400.638C1092.94 400.483 1094.3 400.727 1095.41 401.283Z" fill="white"/>
				<path d="M1123.52 405.414L1115.17 406.291C1115.27 403.878 1114.46 401.805 1113.05 400.325C1112.76 400.029 1112.44 399.777 1112.11 399.527C1113.4 398.719 1114.86 398.179 1116.33 398.024C1118.61 397.785 1120.56 398.496 1121.88 399.824C1123.17 401.175 1123.82 403.142 1123.52 405.414Z" fill="white"/>
				<path d="M1115.32 394.873C1117.15 394.68 1118.84 393.045 1119.08 391.22C1119.32 389.395 1118.03 388.072 1116.2 388.264C1114.37 388.457 1112.69 390.092 1112.45 391.917C1112.21 393.742 1113.49 395.065 1115.32 394.873Z" fill="white"/>
				<path d="M1093.36 397.182C1095.19 396.989 1096.87 395.354 1097.12 393.529C1097.36 391.704 1096.07 390.381 1094.24 390.573C1092.41 390.766 1090.73 392.401 1090.49 394.226C1090.24 396.051 1091.53 397.374 1093.36 397.182Z" fill="white"/>
				</g>
				</g>
				<rect x="-0.862611" y="-0.886733" width="68" height="68" rx="21" transform="matrix(0.994522 -0.104528 -0.13191 0.991262 1076.58 367.801)" stroke="white" stroke-opacity="0.05" stroke-width="2"/>
				</g>
				<g opacity="0.1">
				<rect width="66" height="66" rx="13" transform="matrix(0.999914 -0.0130896 -0.0989724 0.99509 1148.53 156.864)" fill="white" fill-opacity="0.03"/>
				<g opacity="0.5">
				<path d="M1176.77 179.826L1176.2 185.493C1176.14 186.131 1175.56 186.659 1174.92 186.668L1169.23 186.742C1168.52 186.751 1168.02 186.133 1168.19 185.436C1169.09 182.021 1172.07 179.285 1175.55 178.684C1176.26 178.559 1176.84 179.119 1176.77 179.826Z" fill="white"/>
				<path d="M1167.68 190.385C1167.81 195.615 1171.97 199.589 1177.47 199.367C1182.97 199.144 1187.97 194.553 1188.66 189.104C1189.35 183.654 1185.75 179.164 1180.55 178.572C1179.86 178.5 1179.19 179.053 1179.12 179.749C1178.98 181.151 1178.75 183.492 1178.55 185.462C1178.36 187.386 1176.65 188.96 1174.72 188.985L1168.97 189.06C1168.27 189.07 1167.67 189.691 1167.68 190.385Z" fill="white"/>
				</g>
				<rect x="-0.900942" y="-0.982001" width="68" height="68" rx="14" transform="matrix(0.999914 -0.0130896 -0.0989724 0.99509 1148.43 156.848)" stroke="white" stroke-opacity="0.1" stroke-width="2"/>
				</g>
				</g>
				<defs>
				<filter id="filter0_b_218_1118" x="-45.9248" y="59.0752" width="189.996" height="167.023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="6.9624"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter1_b_218_1118" x="260.694" y="157.694" width="99.6897" height="87.6354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.65312"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter2_b_218_1118" x="132.694" y="338.694" width="99.6897" height="87.6354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.65312"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter3_b_218_1118" x="-41.6484" y="416.77" width="138.567" height="118.261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter4_b_218_1118" x="1316.53" y="74.3717" width="180.519" height="162.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="6.73603"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter5_b_218_1118" x="1382.03" y="426.783" width="86.545" height="80.2519" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.2904"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<filter id="filter6_b_218_1118" x="651" y="-26.0615" width="137.949" height="123.584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218_1118"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_218_1118" result="shape"/>
				</filter>
				<clipPath id="clip0_218_1118">
				<rect width="1440" height="674" fill="white"/>
				</clipPath>
				<clipPath id="clip1_218_1118">
				<rect width="66" height="66" rx="20" transform="matrix(0.994522 -0.104528 -0.13191 0.991262 1076.71 367.899)" fill="white"/>
				</clipPath>
				</defs>
			</svg>
		</div>
	</footer>
</template>

<script>
import {gsap} from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
	data() {
		return {
			links: [
				{
					name: "dribbble",
					link: "dribbble.com/abbicons"
				},
				{
					name: "instagram",
					link: "www.instagram.com/abb.icons/"
				},
				{
					name: "linkedin",
					link: "www.linkedin.com/in/carolugwu"
				},
				{
					name: "twitter",
					link: "twitter.com/CarolUgwu"
				},
			]
		}
	},

	methods: {
		initFooterAnimation() {
			const tl = gsap.timeline({
				default: { ease: 'none' },
				scrollTrigger: {
					trigger: 'footer',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true
				}
			})

			tl.fromTo('footer .Container', { yPercent: -50 }, {
				yPercent: 0
			})

			tl.fromTo('.BG', { z: 150 }, {
				z: 0
			}, 0)
		},

		animate() {
			const icons = document.querySelectorAll(".SvgBg svg > g > g")

			const getRandomValue = (min, max) => {
				return Math.random() * (max - min) + min;
			}

			icons.forEach(el => {
				const randomY = getRandomValue(-400, 400);

				// console.log(randomY)

				el.style.transform = `translateY( ${randomY}px)`;
			})

			gsap.to(icons, {
				scrollTrigger: {
					trigger: 'footer',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true
				}, y: 0, ease: "none"
			})
		}
	},

	mounted() {
		this.animate()
		// this.initFooterAnimation()
	}
}
</script>

<style lang="postcss" scoped>
footer {
	@apply bg-primary relative overflow-hidden;
	perspective: 1000px;

	.Container {
		@apply pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-6 lg:pb-9 space-y-[100px] lg:space-y-40 xl:space-y-[198px] relative z-50;

		.Top {
			@apply space-y-7 lg:space-y-10 xl:space-y-[50px] text-center;

			.Texts {
				@apply space-y-4 lg:space-y-6 xl:space-y-[30px];

				h5 {
					@apply text-white 
				}

				p {
					@apply text-white
				}
			}

			button {
        @apply w-fit mx-auto text-primary bg-secondary rounded-lg xl:rounded-xl px-4 xl:px-[30px] py-2.5 xl:py-4 block font-semibold text-sm xl:text-[15px] !leading-[120%]
      }
		}
		
		.Bottom {
			@apply flex flex-col-reverse md:flex-row;

			.Copyright {
				@apply text-center text-sm !leading-[157%] text-[#C7C3C3] font-medium block md:text-left mt-[30px] md:mt-0
			}

			.Links {
				@apply space-x-6 xl:space-x-4;

				.Link {
					@apply rounded-[15px] px-[11px] py-2.5 border border-white border-opacity-40 hover:border-secondary duration-500;

					img {
						@apply w-[17px] xl:w-6
					}
				}
			}
		}
	}

	.SvgBg {
		@apply object-cover object-center w-full h-full absolute top-0 left-0;

		.small {
			@apply md:hidden;
		}

		.big {
			@apply hidden md:block
		}
	}
}
</style>