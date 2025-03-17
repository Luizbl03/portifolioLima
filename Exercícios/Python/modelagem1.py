import numpy as np
import matplotlib.pyplot as plt

#Plotagem de um gráfico que mostra o crescimento populacional.
# P = Pi + e(r*t) 

# Função que executa o cálculo
def calcular(Pi, r, t):
  return Pi + np.exp(r * t)

# Valores a serem aplicados no cálculo
Pi = 100
r = 0.05
t = np.linspace(0, 100, 100)

# Chamada da função
P = calcular(Pi, r, t)

#Plotagem dos valores no gráfico
plt.plot(t, P, label="P=Pi + e(rt)" )
plt.xlabel("Tempo(Anos)")
plt.ylabel("População")
plt.title("Crescimento Populaciona x Tempo")
plt.legend()
plt.grid(True)
plt.show()


