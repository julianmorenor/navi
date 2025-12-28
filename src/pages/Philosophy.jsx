import PageHeader from '../components/PageHeader';

const Philosophy = () => {
    return (
        <div style={{ paddingTop: '150px', minHeight: '80vh' }} className="container">
            <div className="max-w-3xl mx-auto">
                <PageHeader
                    title="Manifiesto Navi"
                    subtitle="Aquí la consciencia guía, el cuerpo habla, el alma recuerda y la acción se alinea con el propósito."
                />
                <div className="prose prose-lg mx-auto text-left space-y-6 text-obsidian/80">
                    <p>
                        Aquí la consciencia guía, el cuerpo habla, el alma recuerda y la acción se alinea con el propósito.
                    </p>
                    <p>
                        Somos un santuario solar orgánico. Creemos en la integración del ser a través de experiencias,
                        productos naturales y la sabiduría de la tierra.
                    </p>
                    {/* Placeholder content until PDF is transcribed/integrated */}
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
