# manage.py
import os
from django.core.management import execute_from_command_line
from django.core.wsgi import get_wsgi_application

settings_module = 'azure.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'settings.settings'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)
application = get_wsgi_application()

if __name__ == '__main__':
    execute_from_command_line(['manage.py', 'runserver', '5000'])