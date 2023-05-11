#! /bin/sh

NS=${1:-staging}
SYSTEM_NS=$NS-system

docker build -t ies .

NS=$NS envsubst < infra/k8s/app.yml | kubectl apply -f -
NS=$SYSTEM_NS envsubst < infra/k8s/system.yml | kubectl apply -f -
NS=$NS envsubst < infra/k8s/ingress.yml | kubectl apply -f -

helm install mongodb infra/system -f infra/system/value.yaml --namespace $SYSTEM_NS
