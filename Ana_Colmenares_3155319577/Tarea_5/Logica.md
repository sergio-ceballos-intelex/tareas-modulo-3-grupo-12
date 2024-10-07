## RESOLVER LOS SIGUIENTES EJERCICIOS: 

### **Ejercicio 1**

true || true || false && true || false && true && true || false


1. Resolver AND
    - false && true → false
    - false && true && true → false
    
**_Resultado:_**  true || true || false || false || false

2. Resolver OR
    - true || true → true
    - true || false → true
    - true || false → true

>**_Resultado final:_** true

### **Ejercicio 2**
true && (false || false && (true && (true || false && true))) || false && (true || false)

1. Resolver parentesis internos
    - true || false && true → true || false → true
    - true || false → true 

**_Resultado:_**  true && (false || false && (true && true)) || false && true

2. Resolver parentesis internoss
    - true && true → true  

**_Resultado:_**  true && (false || false && true) || false && true

3. Resolver parentesis
    - false || false && true → false || false → false 

**_Resultado:_**  true && false || false && true

4. Resolver AND
    - true && false → false 
    - false && true → false 

**_Resultado:_**  false || false

4. Resolver OR
    - false || false → false 

>**_Resultado final:_**  false

### **Ejercicio 3**

!(!true && (false || false && !!!true || (true && !false))) || false && true

1. Resolver negaciones internas
    - !true → false
    - !!!true → !!false → !true → false
    - !false → true

**_Resultado:_**  !(false && (false || false && false || (true && true))) || false && true

2. Resolver parentesis internos
    - true && true → true

**_Resultado:_**  !(false && (false || false && false || true)) || false && true

3. Resolver parentesis internos teniendo en cuenta primero AND y segundo OR
    - false || false && false || true → false || false || true → false || true → true

**_Resultado:_**  !(false && true) || false && true

4. Resolver parentesis internos
    - false && true → false

**_Resultado:_**  !false || false && true

5. Resolver negación
    - !false → true

**_Resultado:_**  true || false && true

6. Resolver AND
    - false && true → false

**_Resultado:_**  true || false

6. Resolver OR
    - true || false → true

>**_Resultado final:_**  true