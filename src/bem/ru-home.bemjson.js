({
	block: 'template-page',
	homepage: true,
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'home-slider',
					content: [
						{
							block : 'home-slider-list',
							content : [
								{
									img: 'img/home-slider-list/slides/1.jpg'
								},
								{
									img: 'img/home-slider-list/slides/2.jpg'
								}
							].map(function(item) {
								return {
									block: 'home-slider-list-item',
									attrs: { 'style': 'background-image: url(' + item.img + ');' },
									content: ''
								};
							})
						},
						{
							block : 'home-slider-text',
							content : [
								{
									elem : 'title',
									content : 'СИМКАРТА ДЛЯ ПОЕЗДОК ЗА ГРАНИЦУ'
								},
								{
									elem : 'button',
									content : [
										{
											tag : 'a',
											attrs: { href: '#' },
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'molecule' },
													content : ''
												},
												'Заказать сейчас'
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block : 'home-advantages',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block : 'home-advantages-tabs',
									content : [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													title: 'Полный контроль и свобода',
													class: 'control'
												},
												{
													title: 'Льготные тарифы для клиентов CAL',
													class: 'cal'
												},
												{
													title: 'Локальные номера в 60-ти странах',
													class: 'local'
												},
												{
													title: 'Горячая линия для связи с CAL',
													class: 'hot'
												}
											].map(function(item) {
												return {
													elem: 'list-item',
													tag : 'li',
													mods : { item : item.class },
													content: [
														{
															tag: 'a',
															attrs: { 'href': '#home-advantages-' + item.class },
															content: item.title
														}
													]
												};
											})
										}
									]
								},
								{
									block : 'home-advantages-hide',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'скрыть'
										}
									]
								},
								{
									block : 'home-advantages-list',
									content : [
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'control'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'cal'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'local'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'hot'
										}
									].map(function(item) {
										return {
											block : 'home-advantages-list-item',
											attrs: { id: 'home-advantages-' + item.class },
											content : [
												{
													elem : 'title',
													tag : 'h3',
													content : item.title
												},
												{
													elem : 'text',
													content : item.text
												},
												{
													elem : 'more',
													content : [
														{
															tag: 'a',
															attrs: { 'href': '#' },
															content: 'Смотреть подробнее'
														}
													]
												}
											]
										};
									})
								}
							]
						}
					]
				},
				{
					block : 'home-elements',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container', mods: { 'no-padding': true } },
							content: [
								{
									block : 'home-elements-list',
									content : [
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-calculator',
													content : [
														{
															elem: 'layout',
															content: [
																{
																	elem: 'layout-left',
																	content: [
																		{
																			block: 'calculator-calls-select',
																			content: [
																				{
																					elem: 'from',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							content: 'Откуда'
																						},
																						{
																							elem: 'select',
																							tag: 'select',
																							mods: {'location': true},
																							content: '<option value="af" selected="selected">Afghanistan</option> <option value="al">Albania</option> <option value="dz">Algeria</option> <option value="as">American Samoa</option> <option value="ad">Andorra</option> <option value="ao">Angola</option> <option value="ai">Anguilla</option> <option value="aq">Antarctica</option> <option value="ag">Antigua and Barbuda</option> <option value="ar">Argentina</option> <option value="am">Armenia</option> <option value="aw">Aruba</option> <option value="au">Australia</option> <option value="at">Austria</option> <option value="az">Azerbaijan</option> <option value="bs">Bahamas</option> <option value="bh">Bahrain</option> <option value="bd">Bangladesh</option> <option value="bb">Barbados</option> <option value="by">Belarus</option> <option value="be">Belgium</option> <option value="bz">Belize</option> <option value="bj">Benin</option> <option value="bm">Bermuda</option> <option value="bt">Bhutan</option> <option value="bo">Bolivia</option> <option value="ba">Bosnia and Herzegovina</option> <option value="bw">Botswana</option> <option value="bv">Bouvet Island</option> <option value="br">Brazil</option> <option value="io">British Indian Ocean Territory</option> <option value="vg">British Virgin Islands</option> <option value="bn">Brunei</option> <option value="bg">Bulgaria</option> <option value="bf">Burkina Faso</option> <option value="bi">Burundi</option> <option value="kh">Cambodia</option> <option value="cm">Cameroon</option> <option value="ca">Canada</option> <option value="cv">Cape Verde</option> <option value="ky">Cayman Islands</option> <option value="cf">Central African Republic</option> <option value="td">Chad</option> <option value="cl">Chile</option> <option value="cn">China</option> <option value="cx">Christmas Island</option> <option value="cc">Cocos [Keeling] Islands</option> <option value="co">Colombia</option> <option value="km">Comoros</option> <option value="cg">Congo - Brazzaville</option> <option value="cd">Congo - Kinshasa</option> <option value="ck">Cook Islands</option> <option value="cr">Costa Rica</option> <option value="hr">Croatia</option> <option value="cu">Cuba</option> <option value="cy">Cyprus</option> <option value="cz">Czech Republic</option> <option value="ci">Côte d’Ivoire</option> <option value="dk">Denmark</option> <option value="dj">Djibouti</option> <option value="dm">Dominica</option> <option value="do">Dominican Republic</option> <option value="ec">Ecuador</option> <option value="eg">Egypt</option> <option value="sv">El Salvador</option> <option value="gq">Equatorial Guinea</option> <option value="er">Eritrea</option> <option value="ee">Estonia</option> <option value="et">Ethiopia</option> <option value="qu">European Union</option> <option value="fk">Falkland Islands</option> <option value="fo">Faroe Islands</option> <option value="fj">Fiji</option> <option value="fi">Finland</option> <option value="fr">France</option> <option value="gf">French Guiana</option> <option value="pf">French Polynesia</option> <option value="tf">French Southern Territories</option> <option value="ga">Gabon</option> <option value="gm">Gambia</option> <option value="ge">Georgia</option> <option value="de">Germany</option> <option value="gh">Ghana</option> <option value="gi">Gibraltar</option> <option value="gr">Greece</option> <option value="gl">Greenland</option> <option value="gd">Grenada</option> <option value="gp">Guadeloupe</option> <option value="gu">Guam</option> <option value="gt">Guatemala</option> <option value="gg">Guernsey</option> <option value="gn">Guinea</option> <option value="gw">Guinea-Bissau</option> <option value="gy">Guyana</option> <option value="ht">Haiti</option> <option value="hm">Heard Island and McDonald Islands</option> <option value="hn">Honduras</option> <option value="hk">Hong Kong SAR China</option> <option value="hu">Hungary</option> <option value="is">Iceland</option> <option value="in">India</option> <option value="id">Indonesia</option> <option value="ir">Iran</option> <option value="iq">Iraq</option> <option value="ie">Ireland</option> <option value="im">Isle of Man</option> <option value="il">Israel</option> <option value="it">Italy</option> <option value="jm">Jamaica</option> <option value="jp">Japan</option> <option value="je">Jersey</option> <option value="jo">Jordan</option> <option value="kz">Kazakhstan</option> <option value="ke">Kenya</option> <option value="ki">Kiribati</option> <option value="kw">Kuwait</option> <option value="kg">Kyrgyzstan</option> <option value="la">Laos</option> <option value="lv">Latvia</option> <option value="lb">Lebanon</option> <option value="ls">Lesotho</option> <option value="lr">Liberia</option> <option value="ly">Libya</option> <option value="li">Liechtenstein</option> <option value="lt">Lithuania</option> <option value="lu">Luxembourg</option> <option value="mo">Macau SAR China</option> <option value="mk">Macedonia</option> <option value="mg">Madagascar</option> <option value="mw">Malawi</option> <option value="my">Malaysia</option> <option value="mv">Maldives</option> <option value="ml">Mali</option> <option value="mt">Malta</option> <option value="mh">Marshall Islands</option> <option value="mq">Martinique</option> <option value="mr">Mauritania</option> <option value="mu">Mauritius</option> <option value="yt">Mayotte</option> <option value="mx">Mexico</option> <option value="fm">Micronesia</option> <option value="md">Moldova</option> <option value="mc">Monaco</option> <option value="mn">Mongolia</option> <option value="me">Montenegro</option> <option value="ms">Montserrat</option> <option value="ma">Morocco</option> <option value="mz">Mozambique</option> <option value="mm">Myanmar [Burma]</option> <option value="na">Namibia</option> <option value="nr">Nauru</option> <option value="np">Nepal</option> <option value="nl">Netherlands</option> <option value="an">Netherlands Antilles</option> <option value="nc">New Caledonia</option> <option value="nz">New Zealand</option> <option value="ni">Nicaragua</option> <option value="ne">Niger</option> <option value="ng">Nigeria</option> <option value="nu">Niue</option> <option value="nf">Norfolk Island</option> <option value="kp">North Korea</option> <option value="mp">Northern Mariana Islands</option> <option value="no">Norway</option> <option value="0">Oceania</option> <option value="om">Oman</option> <option value="qo">Outlying Oceania</option> <option value="pk">Pakistan</option> <option value="pw">Palau</option> <option value="ps">Palestinian Territories</option> <option value="pa">Panama</option> <option value="pg">Papua New Guinea</option> <option value="py">Paraguay</option> <option value="pe">Peru</option> <option value="ph">Philippines</option> <option value="pn">Pitcairn Islands</option> <option value="pl">Poland</option> <option value="pt">Portugal</option> <option value="pr">Puerto Rico</option> <option value="qa">Qatar</option> <option value="ro">Romania</option> <option value="ru">Russia</option> <option value="rw">Rwanda</option> <option value="re">Réunion</option> <option value="bl">Saint Barthélemy</option> <option value="sh">Saint Helena</option> <option value="kn">Saint Kitts and Nevis</option> <option value="lc">Saint Lucia</option> <option value="mf">Saint Martin</option> <option value="pm">Saint Pierre and Miquelon</option> <option value="vc">Saint Vincent and the Grenadines</option> <option value="ws">Samoa</option> <option value="sm">San Marino</option> <option value="sa">Saudi Arabia</option> <option value="sn">Senegal</option> <option value="rs">Serbia</option> <option value="cs">Serbia and Montenegro</option> <option value="sc">Seychelles</option> <option value="sl">Sierra Leone</option> <option value="sg">Singapore</option> <option value="sk">Slovakia</option> <option value="si">Slovenia</option> <option value="sb">Solomon Islands</option> <option value="so">Somalia</option> <option value="za">South Africa</option> <option value="gs">South Georgia and the South Sandwich Islands</option> <option value="kr">South Korea</option> <option value="es">Spain</option> <option value="lk">Sri Lanka</option> <option value="sd">Sudan</option> <option value="sr">Suriname</option> <option value="sj">Svalbard and Jan Mayen</option> <option value="sz">Swaziland</option> <option value="se">Sweden</option> <option value="ch">Switzerland</option> <option value="sy">Syria</option> <option value="st">São Tomé and Príncipe</option> <option value="tw">Taiwan</option> <option value="tj">Tajikistan</option> <option value="tz">Tanzania</option> <option value="th">Thailand</option> <option value="tl">Timor-Leste</option> <option value="tg">Togo</option> <option value="tk">Tokelau</option> <option value="to">Tonga</option> <option value="tt">Trinidad and Tobago</option> <option value="tn">Tunisia</option> <option value="tr">Turkey</option> <option value="tm">Turkmenistan</option> <option value="tc">Turks and Caicos Islands</option> <option value="tv">Tuvalu</option> <option value="um">U.S. Minor Outlying Islands</option> <option value="vi">U.S. Virgin Islands</option> <option value="ug">Uganda</option> <option value="ua">Ukraine</option> <option value="ae">United Arab Emirates</option> <option value="gb">United Kingdom</option> <option value="us">United States</option> <option value="zz">Unknown or Invalid Region</option> <option value="uy">Uruguay</option> <option value="uz">Uzbekistan</option> <option value="vu">Vanuatu</option> <option value="va">Vatican City</option> <option value="ve">Venezuela</option> <option value="vn">Vietnam</option> <option value="wf">Wallis and Futuna</option> <option value="eh">Western Sahara</option> <option value="ye">Yemen</option> <option value="zm">Zambia</option> <option value="zw">Zimbabwe</option> <option value="ax">Åland Islands</option> '
																						}
																					]
																				},
																				{
																					elem: 'to',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							content: 'Куда'
																						},
																						{
																							elem: 'select',
																							tag: 'select',
																							mods: {'location': true},
																							content: '<option value="af" selected="selected">Afghanistan</option> <option value="al">Albania</option> <option value="dz">Algeria</option> <option value="as">American Samoa</option> <option value="ad">Andorra</option> <option value="ao">Angola</option> <option value="ai">Anguilla</option> <option value="aq">Antarctica</option> <option value="ag">Antigua and Barbuda</option> <option value="ar">Argentina</option> <option value="am">Armenia</option> <option value="aw">Aruba</option> <option value="au">Australia</option> <option value="at">Austria</option> <option value="az">Azerbaijan</option> <option value="bs">Bahamas</option> <option value="bh">Bahrain</option> <option value="bd">Bangladesh</option> <option value="bb">Barbados</option> <option value="by">Belarus</option> <option value="be">Belgium</option> <option value="bz">Belize</option> <option value="bj">Benin</option> <option value="bm">Bermuda</option> <option value="bt">Bhutan</option> <option value="bo">Bolivia</option> <option value="ba">Bosnia and Herzegovina</option> <option value="bw">Botswana</option> <option value="bv">Bouvet Island</option> <option value="br">Brazil</option> <option value="io">British Indian Ocean Territory</option> <option value="vg">British Virgin Islands</option> <option value="bn">Brunei</option> <option value="bg">Bulgaria</option> <option value="bf">Burkina Faso</option> <option value="bi">Burundi</option> <option value="kh">Cambodia</option> <option value="cm">Cameroon</option> <option value="ca">Canada</option> <option value="cv">Cape Verde</option> <option value="ky">Cayman Islands</option> <option value="cf">Central African Republic</option> <option value="td">Chad</option> <option value="cl">Chile</option> <option value="cn">China</option> <option value="cx">Christmas Island</option> <option value="cc">Cocos [Keeling] Islands</option> <option value="co">Colombia</option> <option value="km">Comoros</option> <option value="cg">Congo - Brazzaville</option> <option value="cd">Congo - Kinshasa</option> <option value="ck">Cook Islands</option> <option value="cr">Costa Rica</option> <option value="hr">Croatia</option> <option value="cu">Cuba</option> <option value="cy">Cyprus</option> <option value="cz">Czech Republic</option> <option value="ci">Côte d’Ivoire</option> <option value="dk">Denmark</option> <option value="dj">Djibouti</option> <option value="dm">Dominica</option> <option value="do">Dominican Republic</option> <option value="ec">Ecuador</option> <option value="eg">Egypt</option> <option value="sv">El Salvador</option> <option value="gq">Equatorial Guinea</option> <option value="er">Eritrea</option> <option value="ee">Estonia</option> <option value="et">Ethiopia</option> <option value="qu">European Union</option> <option value="fk">Falkland Islands</option> <option value="fo">Faroe Islands</option> <option value="fj">Fiji</option> <option value="fi">Finland</option> <option value="fr">France</option> <option value="gf">French Guiana</option> <option value="pf">French Polynesia</option> <option value="tf">French Southern Territories</option> <option value="ga">Gabon</option> <option value="gm">Gambia</option> <option value="ge">Georgia</option> <option value="de">Germany</option> <option value="gh">Ghana</option> <option value="gi">Gibraltar</option> <option value="gr">Greece</option> <option value="gl">Greenland</option> <option value="gd">Grenada</option> <option value="gp">Guadeloupe</option> <option value="gu">Guam</option> <option value="gt">Guatemala</option> <option value="gg">Guernsey</option> <option value="gn">Guinea</option> <option value="gw">Guinea-Bissau</option> <option value="gy">Guyana</option> <option value="ht">Haiti</option> <option value="hm">Heard Island and McDonald Islands</option> <option value="hn">Honduras</option> <option value="hk">Hong Kong SAR China</option> <option value="hu">Hungary</option> <option value="is">Iceland</option> <option value="in">India</option> <option value="id">Indonesia</option> <option value="ir">Iran</option> <option value="iq">Iraq</option> <option value="ie">Ireland</option> <option value="im">Isle of Man</option> <option value="il">Israel</option> <option value="it">Italy</option> <option value="jm">Jamaica</option> <option value="jp">Japan</option> <option value="je">Jersey</option> <option value="jo">Jordan</option> <option value="kz">Kazakhstan</option> <option value="ke">Kenya</option> <option value="ki">Kiribati</option> <option value="kw">Kuwait</option> <option value="kg">Kyrgyzstan</option> <option value="la">Laos</option> <option value="lv">Latvia</option> <option value="lb">Lebanon</option> <option value="ls">Lesotho</option> <option value="lr">Liberia</option> <option value="ly">Libya</option> <option value="li">Liechtenstein</option> <option value="lt">Lithuania</option> <option value="lu">Luxembourg</option> <option value="mo">Macau SAR China</option> <option value="mk">Macedonia</option> <option value="mg">Madagascar</option> <option value="mw">Malawi</option> <option value="my">Malaysia</option> <option value="mv">Maldives</option> <option value="ml">Mali</option> <option value="mt">Malta</option> <option value="mh">Marshall Islands</option> <option value="mq">Martinique</option> <option value="mr">Mauritania</option> <option value="mu">Mauritius</option> <option value="yt">Mayotte</option> <option value="mx">Mexico</option> <option value="fm">Micronesia</option> <option value="md">Moldova</option> <option value="mc">Monaco</option> <option value="mn">Mongolia</option> <option value="me">Montenegro</option> <option value="ms">Montserrat</option> <option value="ma">Morocco</option> <option value="mz">Mozambique</option> <option value="mm">Myanmar [Burma]</option> <option value="na">Namibia</option> <option value="nr">Nauru</option> <option value="np">Nepal</option> <option value="nl">Netherlands</option> <option value="an">Netherlands Antilles</option> <option value="nc">New Caledonia</option> <option value="nz">New Zealand</option> <option value="ni">Nicaragua</option> <option value="ne">Niger</option> <option value="ng">Nigeria</option> <option value="nu">Niue</option> <option value="nf">Norfolk Island</option> <option value="kp">North Korea</option> <option value="mp">Northern Mariana Islands</option> <option value="no">Norway</option> <option value="0">Oceania</option> <option value="om">Oman</option> <option value="qo">Outlying Oceania</option> <option value="pk">Pakistan</option> <option value="pw">Palau</option> <option value="ps">Palestinian Territories</option> <option value="pa">Panama</option> <option value="pg">Papua New Guinea</option> <option value="py">Paraguay</option> <option value="pe">Peru</option> <option value="ph">Philippines</option> <option value="pn">Pitcairn Islands</option> <option value="pl">Poland</option> <option value="pt">Portugal</option> <option value="pr">Puerto Rico</option> <option value="qa">Qatar</option> <option value="ro">Romania</option> <option value="ru">Russia</option> <option value="rw">Rwanda</option> <option value="re">Réunion</option> <option value="bl">Saint Barthélemy</option> <option value="sh">Saint Helena</option> <option value="kn">Saint Kitts and Nevis</option> <option value="lc">Saint Lucia</option> <option value="mf">Saint Martin</option> <option value="pm">Saint Pierre and Miquelon</option> <option value="vc">Saint Vincent and the Grenadines</option> <option value="ws">Samoa</option> <option value="sm">San Marino</option> <option value="sa">Saudi Arabia</option> <option value="sn">Senegal</option> <option value="rs">Serbia</option> <option value="cs">Serbia and Montenegro</option> <option value="sc">Seychelles</option> <option value="sl">Sierra Leone</option> <option value="sg">Singapore</option> <option value="sk">Slovakia</option> <option value="si">Slovenia</option> <option value="sb">Solomon Islands</option> <option value="so">Somalia</option> <option value="za">South Africa</option> <option value="gs">South Georgia and the South Sandwich Islands</option> <option value="kr">South Korea</option> <option value="es">Spain</option> <option value="lk">Sri Lanka</option> <option value="sd">Sudan</option> <option value="sr">Suriname</option> <option value="sj">Svalbard and Jan Mayen</option> <option value="sz">Swaziland</option> <option value="se">Sweden</option> <option value="ch">Switzerland</option> <option value="sy">Syria</option> <option value="st">São Tomé and Príncipe</option> <option value="tw">Taiwan</option> <option value="tj">Tajikistan</option> <option value="tz">Tanzania</option> <option value="th">Thailand</option> <option value="tl">Timor-Leste</option> <option value="tg">Togo</option> <option value="tk">Tokelau</option> <option value="to">Tonga</option> <option value="tt">Trinidad and Tobago</option> <option value="tn">Tunisia</option> <option value="tr">Turkey</option> <option value="tm">Turkmenistan</option> <option value="tc">Turks and Caicos Islands</option> <option value="tv">Tuvalu</option> <option value="um">U.S. Minor Outlying Islands</option> <option value="vi">U.S. Virgin Islands</option> <option value="ug">Uganda</option> <option value="ua">Ukraine</option> <option value="ae">United Arab Emirates</option> <option value="gb">United Kingdom</option> <option value="us">United States</option> <option value="zz">Unknown or Invalid Region</option> <option value="uy">Uruguay</option> <option value="uz">Uzbekistan</option> <option value="vu">Vanuatu</option> <option value="va">Vatican City</option> <option value="ve">Venezuela</option> <option value="vn">Vietnam</option> <option value="wf">Wallis and Futuna</option> <option value="eh">Western Sahara</option> <option value="ye">Yemen</option> <option value="zm">Zambia</option> <option value="zw">Zimbabwe</option> <option value="ax">Åland Islands</option> '
																						}
																					]
																				},
																				{
																					elem: 'switch',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Поменять местами'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'calculator-price',
																			content: [
																				{
																					elem: 'range',
																					content: [
																						{
																							tag: 'input',
																							attrs: {'type': 'text', 'value': ''}
																						}
																					]
																				},
																				{
																					elem: 'title',
																					content: 'буду платить'
																				}
																			]
																		},
																		{
																			block: 'home-calculator-go',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content: 'Перейти к калькулятору'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'layout-right',
																	content: [
																		{
																			block: 'home-calculator-list',
																			content: [
																				{
																					block: 'home-calculator-list-item',
																					content: [
																						{
																							elem: 'type',
																							content: [
																								{
																									tag: 'img',
																									attrs: {'src': 'img/calculator-calls-list/icons/minutes.png'}
																								},
																								'Минуты'
																							]
																						},
																						{
																							elem: 'info',
																							content: [
																								{
																									elem: 'list',
																									content: [
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>244</strong> Для клиентов VISA CAl<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> Для клиентов<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'home-calculator-list-item',
																					content: [
																						{
																							elem: 'type',
																							content: [
																								{
																									tag: 'img',
																									attrs: {'src': 'img/calculator-internet-list/icons/traffic.png'}
																								},
																								'Трафик'
																							]
																						},
																						{
																							elem: 'info',
																							content: [
																								{
																									elem: 'list',
																									content: [
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>244</strong> Для клиентов VISA CAl<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> Для клиентов<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-balance',
													content : [
														{
															elem: 'layout',
															content: [
																{
																	elem : 'layout-left',
																	content : [
																		{
																			block : 'sidebar',
																			content : [
																				{
																					block : 'sidebar-auth',
																					content : [
																						{
																							elem : 'description',
																							content : '<strong style="color: #dd004e;">*</strong> Для пополнения баланса с сайта необходимо авторизоваться'
																						},
																						{
																							block : 'sidebar-auth-form',
																							content : [
																								{
																									elem : 'form',
																									tag : 'form',
																									content : [
																										{
																											elem : 'field',
																											content : [
																												{
																													elem : 'input',
																													tag: 'input',
																													mods : { 'login' : true },
																													attrs: { type: 'text', placeholder: 'Введите логин' }
																												}
																											]
																										},
																										{
																											elem : 'field',
																											content : [
																												{
																													elem : 'input',
																													tag: 'input',
																													mods : { 'password' : true },
																													attrs: { type: 'password', placeholder: 'Введите пароль' }
																												},
																												{
																													elem : 'show-password',
																													tag: 'a',
																													attrs: { href: '#' },
																													content: [
																														'Показать пароль'
																													]
																												}
																											]
																										},
																										{
																											elem : 'controls',
																											content : [
																												{
																													tag: 'button',
																													attrs: { type: 'submit' },
																													content : 'Авторизоваться'
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'register',
																							content : '<strong style="color: #dd004e;">*</strong> Если у вас нет логина и пароля Вы можете <br><a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a> на сайте'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'layout-right',
																	content : [
																		{
																			block: 'home-balance-content',
																			content: [
																				{
																					tag : 'h3',
																					content : 'Особые тарифы'
																				},
																			  'Simterra предоставляет максимально выгодные тарифы на роуминг для международных звонков, текстовых сообщений, получения и отправки данных, которые действуют в 216 странах мира. <br>',
																			  'Это делает ее идеальным спутником в путешествиях и является веским аргументом для того, чтобы ее взять за границу.<br>',
																				'<br><br>',
																				{
																					tag : 'h3',
																					content : 'Как работает simterra?'
																				},
																				'Simterra крайне проста в использовании. Вы просто заменяете на время путешествия вашу обычную SIM-карту на карту simterra. При этом вы получаете в подарок три номера: американский, европейский и израильский.    Теперь ваши друзья в Израиле, Америке и Европе смогут разговаривать с вами по своим местным тарифам, причем независимо от вашего местонахождения.<br>',
																				{
																					elem : 'go',
																					content : [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: [
																								'перейти к личному кабинету'
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'home-events',
													content: [
														{
															block : 'home-events-list',
															content : [
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	img: 'img/home-events-list/1.jpg',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																}
															].map(function(item) {
																return {
																	block : 'home-events-list-item',
																	content : [
																		{
																			elem : 'date',
																			content : item.date
																		},
																		{
																			elem : 'info',
																			content : [
																				{
																					tag: item.img ? 'img' : undefined,
																					attrs: { 'src': item.img }
																				},
																				{
																					elem : 'title',
																					content : item.title
																				},
																				{
																					elem : 'text',
																					content : item.text
																				}
																			]
																		},
																		{
																			elem : 'more',
																			content : [
																				{
																					tag: 'a',
																					attrs: { 'href': '#' },
																					content: 'Подробнее'
																				}
																			]
																		}
																	]
																};
															})
														}
													]
												},
												{
													block : 'home-events-all',
													content : [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Все мероприятия'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});