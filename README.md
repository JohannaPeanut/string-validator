# String Validator and Parser

## Validation
- phone number
- email adresses
- passwords (with options?)
- booking number
- time
- url...?
- creditcard no:
    - American Express :- Starting with 34 or 37, length 15 digits.
    - Visa :- Starting with 4, length 13 or 16 digits.
    - MasterCard :- Starting with 51 through 55, length 16 digits.
    - Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
    - Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
    - JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
- date?
    - 1. dd/mm/yyyy or dd-mm-yyyy format.
    - 2. mm/dd/yyyy or mm-dd-yyyy format.

## Parser
- to camelCase
- to spiral-case
- to PascalCase
- correct whitespaces after punctuation, double, begin, end
- Date --> Age

## Count
- characters (with/without spaces)
- words
- vowels

## Request Handlers

### '/validation'
- POST - '/email' - validate email
- POST - '/tel' - phone number
- POST - '/date' - validate date 
- POST - '/credit' - creditcard no - with options
- POST - '/password' - password - with options

### '/parse'
- POST - '/camel' - to camelCase
- POST - '/spiral' - to spiral-case
- POST - '/pascal' - to PascalCase
- POST - '/correct' - correct whitespaces after punctuation, double, begin, end
- POST - '/age' - Date --> Age

### '/count'
- POST - '/chars' - characters (with/without spaces)
- POST - '/words' - words
- POST - '/vowels' - vowels