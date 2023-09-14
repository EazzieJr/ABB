<template>
	<footer>
		<div class="Container constraint">
			<div class="Top col-center">
				<div class="Texts">
					<h5>
						Let's Work!
					</h5>

					<p>
						If you've got a project in mind, don't hesitate to reach out to me!
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
					<a v-for="link in links" :key="link.name" :href="link.link" class="Link">
						<img :src="`/svg/${link.name}.svg`" :alt="`An incon representing ${link.name}`">
					</a>
				</div>
			</div>
		</div>

		<div class="SvgBg">
			<svg viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_136_939)">
			<g opacity="0.8" filter="url(#filter0_b_136_939)">
			<rect width="139.248" height="139.248" rx="27.8496" transform="matrix(0.999914 0.0130896 0.164531 0.986372 -32 73)" fill="white" fill-opacity="0.07"/>
			<path d="M38.299 154.559L30.7696 154.46L33.0235 167.973L40.5529 168.071L38.299 154.559Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M57.104 168.202L52.5716 141.377L45.1001 141.279L49.5746 168.104L57.104 168.202Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M67.3715 131.366L59.8421 131.268L66.0367 168.405L73.5662 168.503L67.3715 131.366Z" stroke="#B5B5B5" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M60.2287 120.07L34.9774 139.322" stroke="#B5B5B5" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M33.317 143.747C34.9164 143.768 35.9996 142.506 35.7364 140.929C35.4733 139.351 33.9634 138.055 32.364 138.034C30.7646 138.013 29.6814 139.275 29.9446 140.853C30.2078 142.431 31.7177 143.726 33.317 143.747Z" stroke="#B5B5B5" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M62.8081 121.33C64.4075 121.351 65.4907 120.089 65.2275 118.511C64.9644 116.933 63.4545 115.637 61.8551 115.617C60.2557 115.596 59.1725 116.858 59.4357 118.435C59.6988 120.013 61.2087 121.309 62.8081 121.33Z" stroke="#B5B5B5" stroke-width="2.08872" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="1.62147" y="1.39173" width="136.463" height="136.463" rx="26.4571" transform="matrix(0.999914 0.0130896 0.164531 0.986372 -32.2288 72.9977)" stroke="white" stroke-opacity="0.1" stroke-width="2.78496"/>
			</g>
			<g opacity="0.2" filter="url(#filter1_b_136_939)">
			<rect width="73.0624" height="73.0624" rx="14.6125" transform="matrix(0.999914 0.0130896 0.164531 0.986372 268 165)" fill="white" fill-opacity="0.07"/>
			<path d="M304.885 207.795L300.935 207.744L302.117 214.833L306.068 214.885L304.885 207.795Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M314.752 214.954L312.374 200.879L308.454 200.828L310.802 214.902L314.752 214.954Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M320.14 195.626L316.189 195.575L319.439 215.06L323.39 215.112L320.14 195.626Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M316.392 189.699L303.143 199.801" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M302.271 202.123C303.111 202.134 303.679 201.471 303.541 200.644C303.403 199.816 302.611 199.136 301.771 199.125C300.932 199.114 300.364 199.776 300.502 200.604C300.64 201.432 301.432 202.112 302.271 202.123Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M317.745 190.36C318.584 190.371 319.153 189.709 319.015 188.881C318.876 188.054 318.084 187.374 317.245 187.363C316.406 187.352 315.838 188.014 315.976 188.842C316.114 189.669 316.906 190.349 317.745 190.36Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="0.850772" y="0.730231" width="71.6012" height="71.6012" rx="13.8819" transform="matrix(0.999914 0.0130896 0.164531 0.986372 267.88 164.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.46125"/>
			</g>
			<g opacity="0.1" filter="url(#filter2_b_136_939)">
			<rect width="73.0624" height="73.0624" rx="14.6125" transform="matrix(0.999914 0.0130896 0.164531 0.986372 140 346)" fill="white" fill-opacity="0.07"/>
			<path d="M176.885 388.795L172.935 388.744L174.117 395.833L178.068 395.885L176.885 388.795Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M186.752 395.954L184.374 381.879L180.454 381.828L182.802 395.902L186.752 395.954Z" stroke="#FEFEFE" stroke-opacity="0.65" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M192.139 376.626L188.189 376.575L191.439 396.06L195.39 396.112L192.139 376.626Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M188.392 370.699L175.143 380.801" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M174.271 383.123C175.11 383.134 175.679 382.471 175.541 381.644C175.403 380.816 174.61 380.136 173.771 380.125C172.932 380.114 172.364 380.776 172.502 381.604C172.64 382.432 173.432 383.112 174.271 383.123Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M189.745 371.36C190.584 371.371 191.153 370.709 191.015 369.881C190.876 369.054 190.084 368.374 189.245 368.363C188.406 368.352 187.837 369.014 187.976 369.842C188.114 370.669 188.906 371.349 189.745 371.36Z" stroke="#B5B5B5" stroke-width="1.09594" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="0.850772" y="0.730231" width="71.6012" height="71.6012" rx="13.8819" transform="matrix(0.999914 0.0130896 0.164531 0.986372 139.88 345.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.46125"/>
			</g>
			<g filter="url(#filter3_b_136_939)">
			<rect width="100" height="100" rx="20" transform="matrix(1 0 0.185667 0.982613 -31.6484 426.77)" fill="white" fill-opacity="0.03"/>
			<path d="M18.0793 483.666L23.7415 465.641C24.2215 464.108 26.4261 464.108 27.4853 465.641L40.0557 483.625C41.3392 485.465 39.6185 487.365 37.6329 486.323L29.9215 482.277C29.1826 481.888 28.3714 481.888 27.7792 482.277L21.5424 486.364C19.9507 487.406 17.5155 485.526 18.0831 483.687L18.0793 483.666Z" stroke="white" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="1.18567" y="0.982613" width="98" height="98" rx="19" transform="matrix(1 0 0.185667 0.982613 -31.8309 426.787)" stroke="white" stroke-opacity="0.05" stroke-width="2"/>
			</g>
			<g opacity="0.12" filter="url(#filter4_b_136_939)">
			<rect width="116.049" height="116.049" rx="23.2097" transform="matrix(1 0 0.185667 0.982613 308.703 404)" fill="white" fill-opacity="0.03"/>
			<path d="M367.017 470.528L373.588 449.609C374.145 447.831 376.703 447.831 377.932 449.609L392.52 470.48C394.009 472.615 392.013 474.821 389.708 473.611L380.759 468.915C379.902 468.464 378.961 468.464 378.273 468.915L371.036 473.658C369.188 474.868 366.362 472.686 367.021 470.551L367.017 470.528Z" stroke="white" stroke-opacity="0.65" stroke-width="1.74073" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="1.37595" y="1.14031" width="113.728" height="113.728" rx="22.0492" transform="matrix(1 0 0.185667 0.982613 308.491 404.02)" stroke="white" stroke-opacity="0.05" stroke-width="2.32097"/>
			</g>
			<g opacity="0.12" filter="url(#filter5_b_136_939)">
			<rect width="83.253" height="83.253" rx="16.6506" transform="matrix(1 0 0.185667 0.982613 671 500)" fill="white" fill-opacity="0.03"/>
			<path d="M712.834 547.726L717.548 532.719C717.947 531.443 719.783 531.443 720.664 532.719L731.13 547.691C732.198 549.223 730.766 550.805 729.113 549.937L722.693 546.569C722.077 546.245 721.402 546.245 720.909 546.569L715.717 549.971C714.392 550.839 712.364 549.274 712.837 547.743L712.834 547.726Z" stroke="white" stroke-opacity="0.65" stroke-width="1.24879" stroke-linecap="round" stroke-linejoin="round"/>
			<rect x="0.987103" y="0.818055" width="81.5879" height="81.5879" rx="15.8181" transform="matrix(1 0 0.185667 0.982613 670.848 500.014)" stroke="white" stroke-opacity="0.05" stroke-width="1.66506"/>
			</g>
			<g opacity="0.7" filter="url(#filter6_b_136_939)">
			<rect width="134.721" height="134.721" rx="26.9441" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1348.87 87.8438)" fill="white" fill-opacity="0.03"/>
			<g opacity="0.5">
			<path d="M1428.55 150.075C1426.98 161.153 1407.25 173.487 1404.69 173.454C1402.13 173.42 1386.07 160.617 1387.64 149.539C1387.97 147.182 1389.03 144.892 1390.68 142.985C1392.32 141.078 1394.47 139.649 1396.83 138.894C1399.19 138.14 1401.63 138.098 1403.83 138.773C1406.03 139.449 1407.87 140.809 1409.1 142.666C1410.36 141.348 1411.87 140.29 1413.53 139.573C1415.18 138.857 1416.93 138.5 1418.65 138.529C1420.16 138.546 1421.62 138.859 1422.94 139.45C1424.25 140.04 1425.4 140.896 1426.32 141.969C1427.24 143.041 1427.91 144.309 1428.29 145.7C1428.67 147.091 1428.76 148.578 1428.55 150.075Z" fill="white"/>
			</g>
			<rect x="1.15843" y="1.35156" width="132.026" height="132.026" rx="25.5969" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1349.05 87.8419)" stroke="white" stroke-opacity="0.1" stroke-width="2.69441"/>
			</g>
			<g opacity="0.1" filter="url(#filter7_b_136_939)">
			<rect width="66.4109" height="66.4109" rx="13.2822" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1074.3 155.48)" fill="white" fill-opacity="0.05"/>
			<g opacity="0.5">
			<path d="M1113.58 186.156C1112.81 191.617 1103.08 197.698 1101.82 197.681C1100.56 197.665 1092.64 191.353 1093.41 185.892C1093.57 184.73 1094.1 183.601 1094.91 182.661C1095.72 181.721 1096.78 181.017 1097.94 180.645C1099.1 180.273 1100.31 180.252 1101.39 180.585C1102.48 180.918 1103.39 181.589 1103.99 182.504C1104.61 181.854 1105.36 181.333 1106.17 180.98C1106.99 180.627 1107.85 180.45 1108.7 180.465C1109.45 180.473 1110.16 180.628 1110.81 180.919C1111.46 181.21 1112.03 181.632 1112.48 182.16C1112.93 182.689 1113.26 183.314 1113.45 184C1113.64 184.686 1113.68 185.419 1113.58 186.156Z" fill="white"/>
			</g>
			<rect x="0.571052" y="0.666258" width="65.0826" height="65.0826" rx="12.6181" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1074.39 155.48)" stroke="white" stroke-opacity="0.1" stroke-width="1.32822"/>
			</g>
			<g opacity="0.1" filter="url(#filter8_b_136_939)">
			<rect width="66.4109" height="66.4109" rx="13.2822" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1074.3 363)" fill="white" fill-opacity="0.05"/>
			<g opacity="0.5">
			<path d="M1113.58 393.676C1112.8 399.136 1103.08 405.217 1101.82 405.2C1100.55 405.184 1092.64 398.872 1093.41 393.412C1093.57 392.249 1094.1 391.12 1094.91 390.18C1095.72 389.241 1096.78 388.536 1097.94 388.164C1099.1 387.792 1100.31 387.771 1101.39 388.104C1102.48 388.437 1103.39 389.108 1103.99 390.023C1104.61 389.373 1105.36 388.852 1106.17 388.499C1106.99 388.146 1107.85 387.969 1108.7 387.984C1109.44 387.993 1110.16 388.147 1110.81 388.438C1111.46 388.729 1112.03 389.151 1112.48 389.68C1112.93 390.208 1113.26 390.833 1113.45 391.519C1113.64 392.205 1113.68 392.938 1113.58 393.676Z" fill="white"/>
			</g>
			<rect x="0.571052" y="0.666258" width="65.0826" height="65.0826" rx="12.6181" transform="matrix(0.999914 0.0130896 -0.140037 0.990146 1074.39 362.999)" stroke="white" stroke-opacity="0.1" stroke-width="1.32822"/>
			</g>
			<g opacity="0.5" filter="url(#filter9_b_136_939)">
			<rect width="65.808" height="65.808" rx="13.1616" transform="matrix(0.999657 -0.0261769 -0.115457 0.993312 1396.21 435.086)" fill="white" fill-opacity="0.07"/>
			<g opacity="0.3">
			<path d="M1426.25 474.574L1433.25 470.454L1434.54 459.339L1434.97 455.63L1428 459.51L1421.91 455.972L1421.48 459.681L1420.19 470.796L1421.48 459.681L1421.91 455.972L1414.96 459.851L1413.66 470.967L1413.23 474.676L1420.19 470.796L1426.25 474.574L1426.71 470.626L1428 459.51L1426.71 470.626" fill="white"/>
			</g>
			<rect x="0.581874" y="0.636452" width="64.4918" height="64.4918" rx="12.5035" transform="matrix(0.999657 -0.0261769 -0.115457 0.993312 1396.28 435.106)" stroke="white" stroke-opacity="0.1" stroke-width="1.31616"/>
			</g>
			<g opacity="0.4" filter="url(#filter10_b_136_939)">
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
			</g>
			<defs>
			<filter id="filter0_b_136_939" x="-45.9248" y="59.0752" width="189.996" height="167.023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="6.9624"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter1_b_136_939" x="260.694" y="157.694" width="99.6897" height="87.6354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.65312"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter2_b_136_939" x="132.694" y="338.694" width="99.6897" height="87.6354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.65312"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter3_b_136_939" x="-41.6484" y="416.77" width="138.567" height="118.261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter4_b_136_939" x="297.098" y="392.395" width="160.805" height="137.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="5.80243"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter5_b_136_939" x="662.675" y="491.675" width="115.361" height="98.4563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="4.16265"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter6_b_136_939" x="1316.53" y="74.3717" width="180.519" height="162.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="6.73603"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter7_b_136_939" x="1058.36" y="148.839" width="88.9874" height="79.9081" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.32054"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter8_b_136_939" x="1058.36" y="356.359" width="88.9874" height="79.9081" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.32054"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter9_b_136_939" x="1382.03" y="426.783" width="86.545" height="80.2519" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.2904"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<filter id="filter10_b_136_939" x="651" y="-26.0615" width="137.949" height="123.584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
			<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_939"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_939" result="shape"/>
			</filter>
			<clipPath id="clip0_136_939">
			<rect width="1440" height="674" fill="white"/>
			</clipPath>
			</defs>
			</svg>
		</div>

		<!-- <img src="/svg/footer-bg.svg" alt="" class="BG"> -->
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
					link: ""
				},
				{
					name: "instagram",
					link: ""
				},
				{
					name: "linkedin",
					link: ""
				},
				{
					name: "twitter",
					link: ""
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
		}
	},

	mounted() {
		// this.initFooterAnimation()
	}
}
</script>

<style lang="postcss" scoped>
footer {
	@apply bg-primary relative overflow-hidden;
	perspective: 1000px;

	.Container {
		@apply pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-9 space-y-40 lg:space-y-48 xl:space-y-[198px] relative z-50;

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
				@apply px-9 lg:px-10 xl:px-[50px] py-3.5 lg:py-4 xl:py-5 rounded-[10px] bg-secondary font-semibold text-primary
			}
		}
		
		.Bottom {
			@apply space-y-5 md:space-y-0;

			.Copyright {
				@apply text-center text-sm !leading-[157%] text-[#C7C3C3] font-medium block md:text-left
			}

			.Links {
				@apply space-x-3.5 xl:space-x-4;

				.Link {
					@apply rounded-[15px] px-4 py-3.5 border border-white border-opacity-40;

					img {
						@apply w-5 xl:w-6
					}
				}
			}
		}
	}

	.SvgBg {
		@apply object-cover object-center w-full h-full absolute top-0 left-0
	}

	/* > svg g g {
		@apply translate-y-1/2;
	} */

	.BG {
		@apply absolute object-cover object-left md:object-center w-full h-full top-0 left-0
	}
}
</style>