block('template-breadcrumbs').replace()(function() {
	return [
		{
			block: 'breadcrumbs',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'list',
							tag: 'ul',
							content: this.ctx.links.map(function(item) {
								return {
									elem: 'item',
									tag: 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: item.url },
											content: item.content
										}
									]
								};
							})
						}
					]
				}
			]
		}
	];
});

block('template-pagination').replace()(function() {
	return [
		{
			block: 'pagination',
			content: [
				{
					elem: 'list',
					tag : 'ul',
					content: [
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '← Предыдущая'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '1'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '2'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									elem: 'current',
									tag : 'span',
									content: '3'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '4'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '5'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: 'Следующая →'
								}
							]
						}
					]
				}
			]
		}
	];
});
block('template-footer-he').replace()(function() {
	return [
		{
			block : 'bottom',
			content : [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block : 'bottom-time',
									content : [
										{
											elem : 'days',
											content : [
												{
													tag : 'ul',
													content: [
														{
															tag : 'li',
															content: 'א'
														},
														{
															tag : 'li',
															content: 'ב'
														},
														{
															tag : 'li',
															content: 'ג'
														},
														{
															tag : 'li',
															content: 'ד'
														},
														{
															tag : 'li',
															content: 'ה'
														},
														{
															tag : 'li',
															content: 'ו'
														},
														{
															tag : 'li',
															content: 'ש'
														}
													]
												}
											]
										},
										{
											elem : 'time',
											content : 'מסביב לשעון'
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block : 'bottom-phones',
									content : [
										{
											tag : 'ul',
											content: [
												{
													tag : 'li',
													content: '+7 (888) - 55-70-240'
												},
												{
													tag : 'li',
													content: '+7 (888) - 53-74-242'
												}
											]
										}
									]
								},
								{
									block : 'bottom-contacts',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'קשר'
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
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'footer-logo',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: [
										{
											tag: 'img',
											attrs: { src: 'img/footer/logo.png' }
										}
									]
								}
							]
						},
						{
							block: 'footer-navigation',
							content: [
								{
									elem: 'list',
									tag : 'ul',
									content: [
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'ראשי'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'הנחות ומבצעים'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'עזרה'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'צור קשר'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'אזור אישי'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'טעינת כרטיס'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'הזמן סים'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'מחשבון'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'footer-copyright',
							content: '2015- 2016 All rights SimTerra reserved - חברת פיתוח - <a href="#">Leeft</a>'
						}
					]
				}
			]
		}
	];
});
block('template-header-he').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											block: 'header-top-menu',
											content: [
												{
													elem: 'list',
													tag : 'ul',
													content: [
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'calculator' },
																			content : ''
																		},
																		'מחשבון'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'molecule' },
																			content : ''
																		},
																		'הזמן סים'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'money' },
																			content : ''
																		},
																		'טעינת כרטיס'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'user' },
																			content : ''
																		},
																		'אזור אישי'
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
									elem: 'layout-right',
									content: [
										{
											block: 'header-lang',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'RU'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'EN'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'HE'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'header-logo',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/header/logo.png' }
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-navigation',
											content: [
												{
													elem: 'list',
													tag : 'ul',
													content: [
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'ראשי'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'אודות'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'מוצרים'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'הנחות ומבצעים'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'עזרה'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'צור קשר'
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
});
block('template-page').replace()(function() {
	this.ctx.lang = this.ctx.lang ? this.ctx.lang : 'ru';
	var rtlStyle = {};
	if (this.ctx.rtl) {
		rtlStyle = {
			tag: 'link',
			attrs: {rel: 'stylesheet', href: 'css/rtl.css'}
		};
	}
	var pageTitle = {};
	if (this.ctx.title) {
		pageTitle = {
			block : 'page-title',
			tag : 'h1',
			mix: { block: 'container' },
			content : this.ctx.title
		};
	}
	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: { charset: 'utf-8' }
						},
						{
							tag: 'title',
							content: ''
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/normalize.css/normalize.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/slick.js/slick/slick.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/fancybox/source/jquery.fancybox.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/jquery.form-styler/jquery.formstyler.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/ionrangeslider/css/ion.rangeSlider.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/ionrangeslider/css/ion.rangeSlider.skinSimple.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'css/styles.css' }
						},
						rtlStyle
					]
				},
				{
					tag: 'body',
					content: [
						{
							block: 'page',
							mods: {
								homepage: this.ctx.homepage ? true : undefined
							},
							content: [
								{
									block: 'template-header-' + this.ctx.lang
								},
								pageTitle,
								this.ctx.content,
								{
									block: 'template-footer-' + this.ctx.lang
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery/dist/jquery.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/slick.js/slick/slick.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/fancybox/source/jquery.fancybox.pack.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/circular-carousel/jquery.circular-carousel.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery.form-styler/jquery.formstyler.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/ionrangeslider/js/ion.rangeSlider.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'js/scripts.js' }
						}
					]
				}
			]
		}
	];
});
block('template-popups').replace()(function() {
	return [
	];
});
block('template-footer-ru').replace()(function() {
	return [
		{
			block : 'bottom',
			content : [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block : 'bottom-time',
									content : [
										{
											elem : 'days',
											content : [
												{
													tag : 'ul',
													content: [
														{
															tag : 'li',
															content: 'Пн.'
														},
														{
															tag : 'li',
															content: 'Вт.'
														},
														{
															tag : 'li',
															content: 'Ср.'
														},
														{
															tag : 'li',
															content: 'Чт.'
														},
														{
															tag : 'li',
															content: 'Пт.'
														},
														{
															tag : 'li',
															content: 'Сб.'
														},
														{
															tag : 'li',
															content: 'Вс.'
														}
													]
												}
											]
										},
										{
											elem : 'time',
											content : 'Круглосуточно'
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block : 'bottom-phones',
									content : [
										{
											tag : 'ul',
											content: [
												{
													tag : 'li',
													content: '+7 (888) - 55-70-240'
												},
												{
													tag : 'li',
													content: '+7 (888) - 53-74-242'
												}
											]
										}
									]
								},
								{
									block : 'bottom-contacts',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'Контакты'
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
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'footer-logo',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: [
										{
											tag: 'img',
											attrs: { src: 'img/footer/logo.png' },
										}
									]
								}
							]
						},
						{
							block: 'footer-navigation',
							content: [
								{
									elem: 'list',
									tag : 'ul',
									content: [
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Главная'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Мероприятия'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Помощь'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Контакты'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Личный кабинет'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
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
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Заказать сим карту'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Калькулятор'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'footer-copyright',
							content: '2015- 2016 гг. All rights SimTerra reserved (c) - Разработка компании - <a href="#">Leeft</a>'
						}
					]
				}
			]
		}
	];
});
block('template-header-ru').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											block: 'header-top-menu',
											content: [
												{
													elem: 'list',
													tag : 'ul',
													content: [
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'calculator' },
																			content : ''
																		},
																		'Калькулятор'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'molecule' },
																			content : ''
																		},
																		'Заказать сим карту'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'money' },
																			content : ''
																		},
																		'Пополнить баланс'
																	]
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'user' },
																			content : ''
																		},
																		'Личный кабинет'
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
									elem: 'layout-right',
									content: [
										{
											block: 'header-lang',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'RU'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'EN'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'HE'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'header-logo',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/header/logo.png' }
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-navigation',
											content: [
												{
													elem: 'list',
													tag : 'ul',
													content: [
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Главная'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'О нас'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Продукты'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Мероприятия'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Помощь'
																}
															]
														},
														{
															elem: 'list-item',
															tag : 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Контакты'
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
});