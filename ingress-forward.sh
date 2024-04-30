#!/bin/bash

# Affiche le message pour ouvrir l'Ingress
echo "Open Ingress at http://localhost:31380/"

# Crée un tunnel local vers l'Ingress Gateway Istio
kubectl -n istio-system port-forward deployment/istio-ingressgateway 31380:80

