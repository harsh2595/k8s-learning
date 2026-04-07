# ☸️ Kubernetes Learning (k8s-learning)

A hands-on repository to **learn Kubernetes from scratch to advanced level**, covering core concepts, practical implementations, and real-world DevOps use cases.

This project is designed as a **learning journey + practical lab environment** to help you understand Kubernetes deeply through examples and experiments.

---

## 🚀 About the Project

This repository contains structured notes, YAML configurations, and practical exercises to master Kubernetes concepts such as:

* Pods, Deployments, Services
* Networking & Ingress
* ConfigMaps & Secrets
* Volumes & Persistent Storage
* RBAC & Security
* Monitoring & Observability

Kubernetes is a powerful container orchestration platform that manages containerized applications across clusters efficiently. ([GitHub Wiki Search][1])

---

## 📚 Learning Objectives

* Understand Kubernetes architecture (Control Plane & Nodes)
* Deploy and manage applications using YAML
* Work with Kubernetes resources like Pods, Services, Deployments
* Learn scaling, rolling updates, and self-healing
* Implement networking and service exposure
* Practice real-world DevOps scenarios

---

## 🛠️ Tools & Technologies

* Kubernetes (k8s)
* Docker
* kubectl
* Minikube / Kind (for local cluster)
* YAML
* Linux

---

## 📂 Project Structure

```id="p8v4x1"
.
├── basics/            # Core concepts (Pods, Deployments, Services)
├── networking/        # Services, Ingress, DNS
├── storage/           # Volumes, PVC, PV
├── security/          # RBAC, Secrets
├── monitoring/        # Prometheus / Logging (if included)
├── manifests/         # YAML files for deployments
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash id="n2c8q1"
git clone https://github.com/harsh2595/k8s-learning.git
cd k8s-learning
```

---

### 2️⃣ Start a Local Kubernetes Cluster

Using Minikube:

```bash id="k7j2l9"
minikube start
```

---

### 3️⃣ Apply Kubernetes Manifests

```bash id="f8d3k2"
kubectl apply -f <file.yaml>
```

---

### 4️⃣ Verify Resources

```bash id="m1x9p3"
kubectl get pods
kubectl get svc
```

---

## 🧪 Hands-on Labs

This repo follows a **learning-by-doing approach**, including:

* Deploy a sample application
* Scale applications using Deployments
* Expose apps using Services (ClusterIP, NodePort)
* Work with ConfigMaps & Secrets
* Attach Persistent Volumes
* Implement RBAC policies
* Monitor applications

Hands-on practice is key to mastering Kubernetes concepts effectively. ([GitHub Wiki Search][2])

---

## 🔥 Key Concepts Covered

### 📦 Workloads

* Pods
* Deployments
* ReplicaSets

### 🌐 Networking

* Services
* Ingress
* DNS

### 💾 Storage

* Persistent Volumes (PV)
* Persistent Volume Claims (PVC)

### 🔐 Security

* RBAC
* Secrets Management

---

## 📈 Future Improvements

* Add Helm charts
* Add CI/CD integration (GitHub Actions)
* Deploy on AWS EKS
* Add monitoring with Prometheus & Grafana
* Add real-world microservices project

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 👨‍💻 Author

**Harsh Kashyap**
DevOps Engineer | Kubernetes Enthusiast

---

## ⭐ Support

If this repository helped you, please ⭐ the repo and share with others!

---

## 📌 Notes

This repository is meant for **learning and practice purposes** and will be continuously updated as new concepts are explored.

[1]: https://github-wiki-see.page/m/Mint25/K8s--learning-journey/wiki/Learning-plan-from-Cluade?utm_source=chatgpt.com "Learning plan from Cluade - Mint25/K8s--learning-journey GitHub Wiki"
[2]: https://github-wiki-see.page/m/Mint25/K8s--learning-journey/wiki/Learning-from-plan-Chatgpt?utm_source=chatgpt.com "Learning from plan Chatgpt - Mint25/K8s--learning-journey GitHub Wiki"
