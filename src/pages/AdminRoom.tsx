import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import emptyQuestions from '../assets/images/empty-questions.svg'
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import '../styles/room.scss';
import { useAuth } from '../hooks/useAuth';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const { signOut } = useAuth();
    const history = useHistory()
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { questions, title } = useRoom(roomId);

    async function handleEndRoom() {
        if (window.confirm('Tem certeza que deseja encerrar essa sala?')) {
            await database.ref(`rooms/${roomId}`).update({
                ended_at: new Date()
            })
            signOut();
            history.push('/');
        }
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    async function handleCheckQuestionAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        })
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true,
        })
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Let Me Ask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                    {questions?.length > 0 ? (
                        questions.map(question => (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <button type="button" onClick={() => handleCheckQuestionAnswered(question.id)}>
                                            <img src={checkImg} alt="Marcar pergunta como respondida" />
                                        </button>
                                        <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
                                            <img src={answerImg} alt="Dar destaque à pergunta" />
                                        </button>
                                    </>
                                )}
                                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                                    <img src={deleteImg} alt="Deletar pergunta" />
                                </button>
                            </Question>
                        ))
                    ) : (
                        <div className="no-questions">
                            <img src={emptyQuestions} alt="empty questions" />
                            <h4>Nenhuma pergunta por aqui...</h4>
                            <p>
                                Envie o código desta sala para seus amigos e comece a responder
                                perguntas!
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}