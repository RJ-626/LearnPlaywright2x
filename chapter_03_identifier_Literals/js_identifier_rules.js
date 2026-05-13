/*VALID IDENTIFIERS
- name: Valid - starts with letter
- _private: Valid - starts with underscore
- $price: Valid - starts with dollar sign
- name123: Valid - letter then digits
- user_name: Valid - letter then underscore
- total$: Valid - letter then dollar sign
- myVar: First variable
- myvar: Second variable
- 变量: Valid - Unicode letter

INVALID IDENTIFIERS (errors if used)
- 123name — starts with digit
- my-name — contains hyphen
- my name — contains space
- my@name — contains special character
- if, function, return, class — reserved words
- my.name — contains dot


ERROR OUTPUT FROM TRY-CATCH
- Reserved word error: Unexpected token 'if'
- Number start error: Invalid or unexpected token
- Space error: Unexpected identifier 'name'
- Hyphen error: Unexpected token '-'
- Special character error: Invalid or unexpected token
- Dot error: Unexpected token '.'*/