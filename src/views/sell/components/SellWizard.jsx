import React, { useState } from 'react';

export default function ModernSellWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: '',
    email: '',
    telefono: '',
    // Información del auto
    marca: '',
    modelo: '',
    año: '',
    combustible: '',
    transmision: '',
    kilometraje: '',
    color: '',
    motor: '',
    precio: '',
    descripcion: '',
    // Imagen
    images: []
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      updateFormData('images', [...formData.images, ...files].slice(0, 5));
    }
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    updateFormData('images', newImages);
  };

  const steps = [
    { number: 1, title: 'Datos Personales', icon: 'fas fa-user', description: 'Tu información de contacto' },
    { number: 2, title: 'Información del Auto', icon: 'fas fa-car', description: 'Detalles del vehículo' },
    { number: 3, title: 'Fotos y Finalizar', icon: 'fas fa-camera', description: 'Imágenes y confirmación' }
  ];

  const marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'];
  const transmisiones = ['Manual', 'Automática', 'CVT'];
  const combustibles = ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'];

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
  };

  const inputStyle = {
    borderRadius: '15px',
    padding: '1rem 1.5rem',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.5)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      position: 'relative',
      padding: '2rem 0'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
        <div className="animate-float" style={{
          position: 'absolute',
          top: '5rem',
          left: '2rem',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #0049D0, #6366f1)',
          borderRadius: '20px',
          transform: 'rotate(12deg)'
        }}></div>
        <div className="animate-float-delay-1" style={{
          position: 'absolute',
          top: '8rem',
          right: '3rem',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
          borderRadius: '50%'
        }}></div>
      </div>
      
      {/* Main Container */}
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-12">
            {/* Header with Brand */}
            <div className="text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div style={{
                  padding: '1rem',
                  background: 'linear-gradient(45deg, #0049D0, #6366f1)',
                  borderRadius: '20px',
                  marginRight: '1rem',
                  boxShadow: '0 10px 30px rgba(0,73,208,0.3)'
                }}>
                  <img src="/assets/img/icon/car.svg" alt="Car" style={{
                    width: '48px',
                    height: '48px',
                    filter: 'brightness(0) invert(1)'
                  }} />
                </div>
                <div className="text-start">
                  <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #111827, #0049D0, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                  }}>
                    Vende tu Auto
                  </h1>
                  <p className="text-muted d-flex align-items-center" style={{fontSize: '1.2rem'}}>
                    <i className="fas fa-bolt text-primary me-2"></i>
                    Proceso simple, precio justo, venta segura
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>

          {/* Step Indicator */}
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center justify-content-center">
              {steps.map((step, index) => {
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="d-flex align-items-center">
                    <div className="text-center">
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isActive 
                          ? 'rgba(255,255,255,0.95)' 
                          : isCompleted 
                            ? 'linear-gradient(45deg, #10b981, #059669)' 
                            : 'rgba(255,255,255,0.6)',
                        boxShadow: isActive 
                          ? '0 20px 40px rgba(0,73,208,0.3)' 
                          : '0 10px 20px rgba(0,0,0,0.1)',
                        border: isActive ? '2px solid #0049D0' : 'none',
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {isCompleted ? (
                          <i className="fas fa-check-circle text-white" style={{fontSize: '1.8rem'}}></i>
                        ) : (
                          <i className={`${step.icon} ${isActive ? 'text-primary' : 'text-muted'}`} style={{fontSize: '1.8rem'}}></i>
                        )}
                      </div>
                      
                      <div className="mt-3">
                        <h6 style={{
                          fontWeight: 'bold',
                          color: isActive ? '#0049D0' : isCompleted ? '#10b981' : '#6c757d',
                          marginBottom: '0.25rem'
                        }}>
                          {step.title}
                        </h6>
                        <small className="text-muted">{step.description}</small>
                      </div>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div style={{
                        width: '80px',
                        height: '4px',
                        background: isCompleted || (currentStep > step.number) 
                          ? 'linear-gradient(90deg, #10b981, #059669)' 
                          : '#e9ecef',
                        borderRadius: '2px',
                        margin: '0 1rem',
                        marginTop: '-60px',
                        transition: 'all 0.3s ease'
                      }}>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Form Card */}
          <div className="col-lg-10">
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(20px)',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '30px',
                pointerEvents: 'none'
              }}></div>
              
              <div style={{position: 'relative', zIndex: 1}}>
              
              {/* Step 1: Datos Personales */}
              {currentStep === 1 && (
                <div>
                  <div className="text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                      <div style={{
                        padding: '1rem',
                        background: 'linear-gradient(45deg, #0049D0, #6366f1)',
                        borderRadius: '20px',
                        marginRight: '1rem',
                        boxShadow: '0 10px 20px rgba(0,73,208,0.3)'
                      }}>
                        <i className="fas fa-user text-white" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', margin: 0}}>
                        Datos Personales
                      </h2>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.1rem'}}>
                      Necesitamos tu información para contactarte sobre la venta
                    </p>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="mb-4">
                        <label className="form-label d-flex align-items-center fw-bold">
                          <i className="fas fa-user text-primary me-2"></i>
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Tu nombre completo"
                          value={formData.nombre}
                          onChange={(e) => updateFormData('nombre', e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <img src="/assets/img/icon/mail.svg" alt="Mail" style={{
                              width: '20px',
                              height: '20px',
                              filter: 'hue-rotate(200deg) saturate(2) brightness(1.2)',
                              marginRight: '8px'
                            }} />
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <img src="/assets/img/icon/phone.svg" alt="Phone" style={{
                              width: '20px',
                              height: '20px',
                              filter: 'hue-rotate(200deg) saturate(2) brightness(1.2)',
                              marginRight: '8px'
                            }} />
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            className="form-control form-control-lg"
                            placeholder="+52 55 1234 5678"
                            value={formData.telefono}
                            onChange={(e) => updateFormData('telefono', e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Información del Auto */}
              {currentStep === 2 && (
                <div>
                  <div className="text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                      <div style={{
                        padding: '1rem',
                        background: 'linear-gradient(45deg, #0049D0, #6366f1)',
                        borderRadius: '20px',
                        marginRight: '1rem',
                        boxShadow: '0 10px 20px rgba(0,73,208,0.3)'
                      }}>
                        <i className="fas fa-car text-white" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', margin: 0}}>
                        Información del Auto
                      </h2>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.1rem'}}>
                      Cuéntanos sobre tu vehículo para establecer el mejor precio
                    </p>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <img src="/assets/img/icon/car.svg" alt="Car" style={{
                              width: '20px',
                              height: '20px',
                              filter: 'hue-rotate(200deg) saturate(2) brightness(1.2)',
                              marginRight: '8px'
                            }} />
                            Marca
                          </label>
                          <select
                            className="form-select form-select-lg"
                            value={formData.marca}
                            onChange={(e) => updateFormData('marca', e.target.value)}
                            style={inputStyle}
                          >
                            <option value="">Selecciona una marca</option>
                            {marcas.map(marca => (
                              <option key={marca} value={marca}>{marca}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-cogs text-primary me-2"></i>
                            Modelo
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Ej: Corolla, Civic"
                            value={formData.modelo}
                            onChange={(e) => updateFormData('modelo', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-md-4 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-calendar-alt text-primary me-2"></i>
                            Año
                          </label>
                          <input
                            type="number"
                            min="1990"
                            max="2024"
                            className="form-control form-control-lg"
                            placeholder="2020"
                            value={formData.año}
                            onChange={(e) => updateFormData('año', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-md-4 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-tachometer-alt text-primary me-2"></i>
                            Kilometraje
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="50,000 km"
                            value={formData.kilometraje}
                            onChange={(e) => updateFormData('kilometraje', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-md-4 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-palette text-primary me-2"></i>
                            Color
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Blanco, Negro, Rojo..."
                            value={formData.color}
                            onChange={(e) => updateFormData('color', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-gas-pump text-primary me-2"></i>
                            Combustible
                          </label>
                          <select
                            className="form-select form-select-lg"
                            value={formData.combustible}
                            onChange={(e) => updateFormData('combustible', e.target.value)}
                            style={inputStyle}
                          >
                            <option value="">Tipo de combustible</option>
                            {combustibles.map(comb => (
                              <option key={comb} value={comb}>{comb}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-6 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-exchange-alt text-primary me-2"></i>
                            Transmisión
                          </label>
                          <select
                            className="form-select form-select-lg"
                            value={formData.transmision}
                            onChange={(e) => updateFormData('transmision', e.target.value)}
                            style={inputStyle}
                          >
                            <option value="">Tipo de transmisión</option>
                            {transmisiones.map(trans => (
                              <option key={trans} value={trans}>{trans}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-12 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <img src="/assets/img/icon/money.svg" alt="Money" style={{
                              width: '20px',
                              height: '20px',
                              filter: 'hue-rotate(200deg) saturate(2) brightness(1.2)',
                              marginRight: '8px'
                            }} />
                            Precio Esperado (USD)
                          </label>
                          <input
                            type="number"
                            min="1000"
                            className="form-control form-control-lg"
                            placeholder="15,000"
                            value={formData.precio}
                            onChange={(e) => updateFormData('precio', e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div className="col-12 mb-4">
                          <label className="form-label d-flex align-items-center fw-bold">
                            <i className="fas fa-file-alt text-primary me-2"></i>
                            Descripción
                          </label>
                          <textarea
                            rows="4"
                            className="form-control"
                            placeholder="Describe el estado de tu vehículo, mantenimientos, características especiales..."
                            value={formData.descripcion}
                            onChange={(e) => updateFormData('descripcion', e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Fotos y Finalizar */}
              {currentStep === 3 && (
                <div>
                  <div className="text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                      <div style={{
                        padding: '1rem',
                        background: 'linear-gradient(45deg, #0049D0, #6366f1)',
                        borderRadius: '20px',
                        marginRight: '1rem',
                        boxShadow: '0 10px 20px rgba(0,73,208,0.3)'
                      }}>
                        <i className="fas fa-camera text-white" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', margin: 0}}>
                        Fotos del Vehículo
                      </h2>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.1rem'}}>
                      Agrega hasta 5 fotos para mostrar tu vehículo en su mejor forma
                    </p>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Upload Area */}
                      <div className="mb-4">
                        <label className="d-block w-100">
                          <div style={{
                            border: '2px dashed #0049D0',
                            borderRadius: '30px',
                            padding: '3rem',
                            textAlign: 'center',
                            background: 'rgba(0,73,208,0.05)',
                            backdropFilter: 'blur(10px)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          className="hover-shadow">
                            <i className="fas fa-cloud-upload-alt text-primary mb-3" style={{fontSize: '4rem'}}></i>
                            <h4 className="fw-semibold text-dark mb-2">Arrastra fotos aquí o haz clic para seleccionar</h4>
                            <p className="text-muted">PNG, JPG hasta 10MB cada una (máximo 5 fotos)</p>
                          </div>
                          <input
                            type="file"
                            className="d-none"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>

                      {/* Image Preview */}
                      {formData.images.length > 0 && (
                        <div className="row mb-4">
                          {formData.images.map((image, index) => (
                            <div key={index} className="col-md-4 mb-3 position-relative">
                              <div style={{
                                aspectRatio: '16/9',
                                background: '#f8f9fa',
                                borderRadius: '15px',
                                overflow: 'hidden'
                              }}>
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt={`Preview ${index + 1}`}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                  }}
                                />
                              </div>
                              <button
                                onClick={() => removeImage(index)}
                                className="btn btn-danger btn-sm position-absolute"
                                style={{
                                  top: '-8px',
                                  right: '-8px',
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '50%',
                                  padding: 0
                                }}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Benefits */}
                      <div className="row">
                        <div className="col-md-4 text-center mb-4">
                          <div style={{
                            padding: '2rem',
                            background: 'rgba(255,255,255,0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                          }}>
                            <i className="fas fa-file-alt text-primary mb-3" style={{fontSize: '3rem'}}></i>
                            <h5 className="fw-semibold text-dark mb-2">Proceso Simple</h5>
                            <p className="text-muted small">Nosotros nos encargamos de todo el proceso de subasta</p>
                          </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                          <div style={{
                            padding: '2rem',
                            background: 'rgba(255,255,255,0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                          }}>
                            <i className="fas fa-gavel text-success mb-3" style={{fontSize: '3rem'}}></i>
                            <h5 className="fw-semibold text-dark mb-2">Mejor Precio</h5>
                            <p className="text-muted small">Las subastas garantizan el mejor precio para tu vehículo</p>
                          </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                          <div style={{
                            padding: '2rem',
                            background: 'rgba(255,255,255,0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                          }}>
                            <i className="fas fa-shield-alt text-info mb-3" style={{fontSize: '3rem'}}></i>
                            <h5 className="fw-semibold text-dark mb-2">100% Seguro</h5>
                            <p className="text-muted small">Transacciones verificadas y protegidas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between align-items-center mt-5 pt-4" style={{borderTop: '1px solid rgba(255,255,255,0.2)'}}>
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="btn d-flex align-items-center"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '15px',
                    fontWeight: '600',
                    background: currentStep === 1 
                      ? 'rgba(108,117,125,0.2)' 
                      : 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: currentStep === 1 ? 'none' : '1px solid rgba(255,255,255,0.4)',
                    color: currentStep === 1 ? '#6c757d' : '#495057',
                    boxShadow: currentStep === 1 ? 'none' : '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <i className="fas fa-chevron-left me-2"></i>
                  Anterior
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="btn btn-primary d-flex align-items-center"
                    style={{
                      padding: '12px 30px',
                      borderRadius: '15px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #0049D0, #6366f1)',
                      border: 'none',
                      boxShadow: '0 10px 25px rgba(0,73,208,0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Siguiente
                    <i className="fas fa-chevron-right ms-2"></i>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-success d-flex align-items-center"
                    style={{
                      padding: '12px 30px',
                      borderRadius: '15px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #10b981, #059669)',
                      border: 'none',
                      boxShadow: '0 10px 25px rgba(16,185,129,0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className="fas fa-star me-2"></i>
                    Registrar Vehículo
                  </button>
                )}
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}