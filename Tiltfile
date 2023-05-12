load('ext://namespace', 'namespace_create', 'namespace_inject');
load('ext://helm_resource', 'helm_resource', 'helm_repo');

namespace_create('staging');
namespace_create('system');

IMAGE_PREFIX='registry.iot.io';
SYSTEM_PREFIX='system';
API_PREFIX='api';

def api_resource(name):
  return API_PREFIX + '-' + name; 

def system_resource(name):
  return SYSTEM_PREFIX + '-' + name; 

def get_image(name):
  return IMAGE_PREFIX + '/' + name; 

docker_build(get_image('application'), '.', build_args={'SERVICE':'application'});
docker_build(get_image('authentication'), '.', build_args={'SERVICE':'authentication'});

k8s_yaml(helm('./infra/services', name=API_PREFIX, namespace='staging'));
k8s_yaml(helm('./infra/system', name=SYSTEM_PREFIX, namespace='system'));

k8s_resource(api_resource('application'), resource_deps=[system_resource('mongodb') ]);
k8s_resource(api_resource('authentication'), resource_deps=[system_resource('mongodb') ]);
