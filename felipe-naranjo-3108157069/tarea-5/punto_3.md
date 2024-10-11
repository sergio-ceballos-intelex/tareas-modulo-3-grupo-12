### Ejercicio 3, lógica  proposicional

### _Punto 1_
```javascript
true || true || false && true || false && true && true || false
```

#### Paso a paso:

Aplicamos la prioridad de los operadores:

1. La conjunción (``&&``) tiene prioridad sobre la disyunción (``||``), así que resolvemos primero las conjunciones:

- ``false && true = false``
- ``false && true && true = false``

La expresión ahora queda de la siguiente manera:

```javascript
true || true || false || false || false
```
2. Ahora solucionamos la disyunción (``||``):

- ``true || true = true``
- ``true || false = true``
- ``true || false = true``

*RTA:* ``true``
---
### _Punto 2_

```javascript
true && (false || false && (true && (true || false && true))) || false && (true || false)
```
#### Paso a paso:

1. Identificar y resolver las expresiones dentro de los paréntesis más internos

````javascript 
(true || false && true)
````
-  ``false && true`` = ``false``
- ``true || false ``= ``true``

**RTA:** ``true``

2.  La expresión ahora queda de la siguiente manera:

```javascript
true && (false || false && (true && true)) || false && (true || false)
```

- Resolver la siguiente expresión interna ``true && true`` = ``true``

**RTA:** ``true``

3. Ahora solucionamos los dos parentecis que quedan en la operacion

```javascript
true && (false || false && true && true) || false && (true || false)
```

- ``(false || false && true && true)`` = ``false || false``
- `` false || false`` = ``false``

**RTA:** ``false``

- ``(true || false)`` = ``true``

**RTA:** ``true``

4. Por último la operación queda así:

```javascript
true && false || false && true
```
Ahora solucionamo en orden de prioridades

- ``true && false`` = ``false``
- ``false && true`` = ``false``

Por  último:

```javascript
 false || false
```
**RTA:** ``false``
---
### _Punto 3_

```javascript
!(!true && (false || false && !!!true || (true && !false))) || false && true
```

#### Paso a paso:

1. Resolvemos los valores que se encuentran con ``!`` dentro de lo parentesis

- ``!true`` = ``false``
- ``!!!true`` = ``!!false`` = ``!true`` =``false``
- ``!false`` = ``true``

2.  Ahora vamos rompiendo parentesis

```javascript
!(false && (false || false && false || (true && true))) || false && true
```
### **Primer ()**

- ``(true && true)`` = ``true``

```javascript
!(false && (false || false && false || true)) || false && true
```

###  **Segundo ()**

-``(false || false && false || true)``

 Resolvemos en orden de operadores

 - ``false && false`` = ``false``

Ahora tenemos

- ``(false || false || true)`` = ``true``

```javascript
!(false && true) || false && true
```
###  **Tercer ()**

- ``!(false && true)``

Resolvemos lo que esta dentro de ()

- ``false && true`` = ``false``

Ahor tenemos

- ``!(false)`` = ``true``

### **Finalmente**

```javascript
true || false && true
```

Resolvemos en orden de operadores y damos el resultado final

- ``false && true`` = ``false``
- ``true || false`` = ``true``

**RTA:** ``true``
--
