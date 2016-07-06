({
	block: 'template-page',
	title: 'Особые мероприятия',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'special-events',
							content: [
								{
									block: 'special-events-list',
									content: [
										{
											date: 'с 12.03.2015<br>до 12.03.2015 ',
											title: 'Локальный телефонный номер бесплатно',
											text: 'Локальный телефонный номер бесплатно для клиентов с положительным балансом не менее 50 евро'
										},
										{
											date: 'с 12.03.2015<br>до 12.03.2015 ',
											title: '50% cкидка за привязку банковской карты',
											text: '<img src="img/special-events-list/1.jpg" style="float: left; margin-right: 10px;">С 1 марта для клиентов Архангельской области изменяются условия подключения акции «50% cкидка'
										},
										{
											date: 'с 12.03.2015<br>до 12.03.2015 ',
											title: 'скидки в официальном мобильном приложении',
											text: 'Локальный телефонный номер бесплатно для клиентов с положительным балансом не менее 50 евро'
										},
										{
											date: 'с 12.03.2015<br>до 12.03.2015 ',
											title: 'Локальный телефонный номер бесплатно',
											text: 'Локальный телефонный номер бесплатно для клиентов с положительным балансом не менее 50 евро'
										}
									].map(function(item) {
										return {
											block: 'special-events-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															elem : 'info',
															content : [
																{
																	elem: 'date',
																	content: item.date
																},
																{
																	elem: 'title',
																	tag : 'h3',
																	content: item.title
																},
																{
																	elem: 'text',
																	content: item.text
																}
															]
														},
														{
															elem : 'more',
															content : 'Подробнее'
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
				}
			]
		}
	]
});