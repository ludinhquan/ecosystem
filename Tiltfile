IMAGE_PREFIX="com.ecosystem"
SYSTEM_PREFIX="system"
SERVICE_PREFIX="api"

def api_resource(name):
  return SERVICE_PREFIX + '.' + name; 

def system_resource(name):
  return SYSTEM_PREFIX + '.' + name; 

def get_image(name):
  return IMAGE_PREFIX + '.' + name; 

docker_build(get_image('application'), '.', build_args={"SERVICE":"application"})

k8s_yaml(helm('./infra/system', name=SYSTEM_PREFIX))

