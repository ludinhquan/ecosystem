#! /bin/sh

# Start cluster
minikube start
minikube addons enable ingress

tilt up
