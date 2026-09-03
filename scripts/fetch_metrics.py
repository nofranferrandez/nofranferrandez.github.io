import json
import os
from datetime import datetime


def generate_metrics_report():
	"""
	Genera la estructura de métricas que usará el optimizador SEO.

	En producción, esta función puede sustituirse por una consulta a la API de
	Google Search Console autenticada mediante secretos de GitHub.
	"""
	data_dir = "data"
	os.makedirs(data_dir, exist_ok=True)

	# Estructura de métricas por calculadora.
	report = {
		"updated_at": datetime.now().isoformat(),
		"pages": [
			{
				"file": "herramientas/pension.html",
				"impressions": 1450,
				"clicks": 18,
				"ctr": 1.24,
				"target_keywords": [
					"calcular pension 2026",
					"jubilacion seguridad social",
				],
			},
			{
				"file": "herramientas/irpf.html",
				"impressions": 3200,
				"clicks": 115,
				"ctr": 3.59,
				"target_keywords": ["calculadora irpf 2026", "retenciones nomina"],
			},
		],
	}

	output_path = os.path.join(data_dir, "latest_metrics.json")
	with open(output_path, "w", encoding="utf-8") as file:
		json.dump(report, file, indent=2, ensure_ascii=False)

	print(f"Reporte de métricas guardado en: {output_path}")

if __name__ == "__main__":
	generate_metrics_report()
