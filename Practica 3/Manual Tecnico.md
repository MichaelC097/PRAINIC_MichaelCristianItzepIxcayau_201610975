
# Manual Técnico

## Instalación de Ubuntu 24.04 LTS en VirtualBox

### Requisitos del Sistema
- **Procesador**: CPU x86_64 (Intel/AMD).
- **RAM**: 4 GB mínimo.
- **Almacenamiento**: 20 GB o más.
- **Virtualización**: Habilitada en BIOS.

### Instalación Paso a Paso
1. Crear la VM con **Ubuntu 64-bit** en VirtualBox.
2. Configurar 4 GB de RAM y 20 GB de disco virtual.
3. Cargar la ISO de Ubuntu y arrancar la máquina virtual.
4. Instalar Ubuntu con "Borrar disco e instalar Ubuntu".
5. Crear usuario y configurar el sistema.

## Configuración del Entorno

### Configuración de Red
Verificar la conexión de red con:
```bash
ping google.com
```
Si no hay conexión, configurar la interfaz de red:
```bash
sudo nano /etc/netplan/00-installer-config.yaml
```
Aplicar cambios:
```bash
sudo netplan apply
```

### Configuración del Servidor Apache2
Instalar y habilitar Apache:
```bash
sudo apt update
sudo apt install apache2 -y
sudo systemctl enable apache2
```
Verificar estado:
```bash
systemctl status apache2
```

### Seguridad y Permisos a tomar en consideracion
Modificar permisos de archivos web:
```bash
sudo chmod -R 755 /var/www/html/
```
Asignar usuario propietario:
```bash
sudo chown -R www-data:www-data /var/www/html/
```

### Registro y Monitoreo
Ver logs de Apache:
```bash
sudo tail -f /var/log/apache2/access.log
```

## Respaldo y Mantenimiento
Respaldo de configuración Apache:
```bash
sudo tar -cvzf backup_apache.tar.gz /etc/apache2/
```
Actualizar el sistema regularmente:
```bash
sudo apt update && sudo apt upgrade -y
```
