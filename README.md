![image](https://user-images.githubusercontent.com/28491001/149228984-5c4f499e-4299-4bb6-b50f-d164e77b1b1c.png)
 https://main.d35ajv2vvr3l3w.amplifyapp.com/
 
 #
 | Tecnologias |
| :---         | 
|  React   |
|Redux  |
|Html5 |
|JS |
|Axios |

#
 | Libreria externas |
| :---         | 
|  Apexcharts  |
# 
 




### ¿Qué es Arquitect?
````
Arquitect es la plataforma que conecta a los ususuarios que buscan arquitectos
````

### ¿Qué perfiles tenemos?
````
* Usuario: Este es el usuario que busca el arquitecto, solo puede registarse y pedir presupuesto en el mismo registro (lead).
* Arquitecto: Tendrán a su disposición un panel de control para poder comprar los leads de los usuarios.
* Super Admin: Tendremos los datos de todos los usuarios, además en el panel de este podremos recargar el saldo de los usuarios para que puedan comprar más leads.
````

# Proceso y pantalla de los perfiles
## Usuario
Formulario para el registro:
![image](https://user-images.githubusercontent.com/28491001/149233154-8382d071-371c-4ab6-b88d-cb1ee9995902.png)
![image](https://user-images.githubusercontent.com/28491001/149233222-206f845f-10a8-422c-a43f-43e33d5b6174.png)
## Arquitecto
Formulario para el registro:
![image](https://user-images.githubusercontent.com/28491001/149233351-8532255e-d7ec-45c7-a63b-33d0e7b98213.png)
![image](https://user-images.githubusercontent.com/28491001/149233374-984ff79f-dcad-435b-a66d-76990a52c168.png)
Aceeso al panel del Arquitecto:
![image](https://user-images.githubusercontent.com/28491001/149233451-cd0c1d76-4f85-4935-aa22-85aec638de3d.png)
### Dentro del panel del arquitecto
![image](https://user-images.githubusercontent.com/28491001/149233530-09621352-2363-41da-a03a-68acad4fb017.png)
Tendremos a nuestra disposición a Max, un bot vistual que nos hará una guia de lo que podemos hacer en la diferentes pestañas del panel:
![image](https://user-images.githubusercontent.com/28491001/149235970-e0dc1217-efb3-4ccc-8b06-54824db47ff3.png)
![image](https://user-images.githubusercontent.com/28491001/149236003-806fe433-bba3-4bd2-8761-8a2df4d5ff39.png)
![image](https://user-images.githubusercontent.com/28491001/149236162-a1b99a0a-e43a-4b06-a75e-8f2ea71553db.png)
![image](https://user-images.githubusercontent.com/28491001/149236258-9d7aec00-54a9-4b59-9aff-4b08231d099a.png)
![image](https://user-images.githubusercontent.com/28491001/149236025-4f735547-0312-44e8-a2cd-dfd31b9ca476.png)

#### Perfil
![image](https://user-images.githubusercontent.com/28491001/149233805-f0304258-b167-4b6b-a268-75bf865b0c13.png)
Para actualizar los datos de nuestro perfil:
![image](https://user-images.githubusercontent.com/28491001/149233823-c45a6f37-f44a-45e2-9dce-9f7ef7d5a758.png)
Para borrar nuestra cuenta, hemos creado un pop-up preguntandonos de nuevo como medida de seguridad:
![image](https://user-images.githubusercontent.com/28491001/149233843-33a8b711-91e7-4cf5-8b1b-2d9b69d87b33.png)
Podremos recargar nuestra cartera enviando el dinero por paypal, al clicar en "recargar cartera se nos abrirá un link para hacer el pago:
![image](https://user-images.githubusercontent.com/28491001/149235210-7512d706-8d6a-4c9f-9976-0b7d03eb4e36.png)
Link externo de Paypal:
![image](https://user-images.githubusercontent.com/28491001/149235774-c2936e64-a6e5-4dd6-ad66-d2dbebfde61b.png)


#### Ver Ofertas
![image](https://user-images.githubusercontent.com/28491001/149234055-f4165d1b-0ed0-45da-99c6-b829e19dda3a.png)
Al comprar un lead, gastaremos una moneda de toda la aplicación, tras la compra nos redigirá a nuestro perfil para poder ver los datos del cliente y poder contactar con él:
![image](https://user-images.githubusercontent.com/28491001/149236509-49db4050-9f6f-456c-9d24-addf2de94073.png)
![image](https://user-images.githubusercontent.com/28491001/149236595-1f5f0f09-ccce-465e-9ef6-2feefc6c340c.png)


## Super Admin
* Usuario: raulfarllobell@gmail.com
* Contraseña: 12345

![image](https://user-images.githubusercontent.com/28491001/149234417-f1de06d9-f15f-420a-9c8e-f82c618c3371.png)

#### Panel Principal
![image](https://user-images.githubusercontent.com/28491001/149234625-1c57b16f-caf3-4cd0-824a-492a88f87b67.png)
Al clicar en el icono de email se nos abrirá nuestro servidor de correo para enviar un email al cliente:
![image](https://user-images.githubusercontent.com/28491001/149234831-6f79703e-6c2c-4d49-bc12-90b42876eb21.png)
En el icono de las monedas podremos recargar el saldo de los Arquitectos para que puedan comprar más:
![image](https://user-images.githubusercontent.com/28491001/149234949-87c0b1eb-91e6-4561-96c5-6d62d5c836bb.png)
![image](https://user-images.githubusercontent.com/28491001/149234968-6253b56e-db64-4ed0-b089-e610a7e5bb75.png)


## Detalles Extras en la aplicación
![image](https://user-images.githubusercontent.com/28491001/149234182-d3fe0501-9f16-4865-8cd1-171d7b68f70f.png)
![image](https://user-images.githubusercontent.com/28491001/149234262-4f736f70-74bf-4605-84a6-f586451b246b.png)




#
## Proceso de instalación
### Ver front en Aws
https://main.d35ajv2vvr3l3w.amplifyapp.com/


## Crear proyecto React
npx create-react-app front-react-redux-arquitectos

### Para arrancar el servidor:
npm run start

### Dentro de src creamos 2 carpeta:
Containers
Components

## React Router Dom 
npm i react-router-dom

## AWS
En aws entramos a AWS Amplify y creamos una aplicación: Alojar aplicación web

## Axios
Npm i axios

## Redux
npm i redux
### Creamos dentro de src la carpeta:
redux

### Dentro de /src/redux creamos la cerpeta y dos archivos js:
reducers

Store.js

Types.js

## Scss
Npm i sass
### Dentro de src creamos:
App.scss
### Dentro de src creamos la carpeta:
Scss
### Dentro de  /src/Scss creamos el archivo:
 main.scss

## Creamos carpeta  “imágenes”
Creamos la carpeta imágenes dentro de src desde esta carpeta utilizaremos el contenido multimedia en nuestro proyecto
