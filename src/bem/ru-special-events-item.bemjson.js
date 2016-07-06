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
									block: 'special-events-item',
									content: [
										{
											elem : 'info',
											content : [
												{
													elem: 'date',
													content: 'с 12.03.2015<br>до 12.03.2015 '
												},
												{
													elem: 'title',
													tag : 'h2',
													content: 'Локальный телефонный номер бесплатно'
												},
												{
													elem : 'sub-title',
													tag : 'h3',
													content : 'Локальный телефонный номер бесплатно для клиентов с положительным балансом не менее 50 евро'
												},
												{
													elem: 'text',
													content: 'Если на вашем балансе есть 50 или более евро, ты вам полагается бесплатно дополнительный локальный номер в любой стране. Если ваш баланс станет меньше 50 евро, то ваш дополнительный локальный номер становится платным. Увеличьте баланс до 50 евро и локальный номер снова становиться платным.<br><br><img src="img/special-events-item/1.jpg">'
												}
											]
										},
										{
											elem : 'back',
											content : [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Назад'
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