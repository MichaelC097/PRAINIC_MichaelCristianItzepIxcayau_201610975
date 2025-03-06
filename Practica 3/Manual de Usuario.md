# Manual de Usuario

## Instalación de Ubuntu 24.04 LTS en VirtualBox

### Requisitos Previos
- Descargar e instalar [VirtualBox](https://www.virtualbox.org/).
- Descargar la imagen ISO de [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop).

### Creación de la Máquina Virtual
1. Abrir VirtualBox y hacer clic en **"Nueva"**.
2. Asignar un nombre (Ejemplo: Ubuntu 24.04) y seleccionar:
   - **Tipo**: Linux
   - **Versión**: Ubuntu (64-bit)
3. Asignar memoria RAM recomendada: **4 GB (4096 MB)** o más.
4. Crear un disco duro virtual:
   - Tipo: **VDI (Virtual Disk Image)**
   - Tamaño: **Dinámicamente asignado**
   - Capacidad: **20 GB o más**

### Instalación de Ubuntu
1. Seleccionar la máquina virtual y hacer clic en **Configuración → Almacenamiento**.
2. Agregar la ISO de Ubuntu en la unidad óptica.
3. Iniciar la máquina virtual y seguir los pasos:
   - Seleccionar "Probar e instalar Ubuntu".
   - Elegir idioma y teclado.
   - Conectarse a Internet.
   - Seleccionar "Instalación normal".
   - Elegir "Borrar disco e instalar Ubuntu" (solo afecta la VM).
   - Crear un usuario y contraseña.
   - Finalizar la instalación y reiniciar.

---

## Uso de la Terminal de Ubuntu

### Comandos Básicos

- **Navegar entre directorios**
  ```bash
  cd <directorio>
  ```
- **Ver contenido de un directorio**
  ```bash
  ls
  ```
- **Crear una carpeta**
  ```bash
  mkdir <nombre_carpeta>
  ```
- **Copiar archivos y carpetas**
  ```bash
  cp <archivo> <destino>
  ```
- **Mover archivos y carpetas**
  ```bash
  mv <archivo> <destino>
  ```
- **Eliminar archivos y carpetas**
  ```bash
  rm <archivo>
  rm -r <carpeta>
  ```
- **Ejecutar como superusuario**
  ```bash
  sudo <comando>
  ```
- **Actualizar permisos de archivos o directorios**
  ```bash
  chmod 755 <archivo>
  ```
- **Crear/editar un archivo de texto**
  ```bash
  nano <archivo>.txt
  ```
- **Instalar paquetes**
  ```bash
  sudo apt install <paquete>
  ```
- **Actualizar paquetes**
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```
- **Eliminar paquetes**
  ```bash
  sudo apt remove <paquete>
  ```

### Configuración del Servidor Apache2
1. **Instalar Apache2**
   ```bash
   sudo apt install apache2 -y
   ```
2. **Verificar el estado del servicio**
   ```bash
   systemctl status apache2
   ```
3. **Abrir Localhost en el navegador**
   ```bash
   http://localhost
   ```
4. **Moverse al directorio raíz del servidor web**
   ```bash
   cd /var/www/html/
   ```
5. **Modificar el archivo `index.html`**
   ```bash
   sudo nano index.html
   ```
   - Ingresar el siguiente contenido y guardar:
   ```html
   <html>
   <head><title>Mi Página</title></head>
   <body>
       <h1>12345678 - Juan Pérez</h1>
   </body>
   </html>
   ```
6. **Verificar los cambios en el navegador**
   ```bash
   http://localhost
   ```

---
