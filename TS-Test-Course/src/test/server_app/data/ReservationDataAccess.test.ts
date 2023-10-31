import { DataBase } from "../../../app/server_app/data/DataBase";
import { ReservationsDataAccess } from "../../../app/server_app/data/ReservationsDataAccess";
import { Reservation } from "../../../app/server_app/model/ReservationModel";

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../app/server_app/data/DataBase', () => ({
    DataBase: jest.fn().mockImplementation(() => ({
        insert: insertMock,
        getBy: getByMock
    }))
}));


describe('ReservationDataAccess test suite', () => {

    let sut: ReservationsDataAccess;

    const someReservation: Reservation = {
        id: '',
        room: 'someRoom',
        user: 'someUser',
        startDate: 'someStartDate',
        endDate: 'someEndDate'
    }

    const someId = '1234';

    beforeEach(() => {
        sut = new ReservationsDataAccess();
        expect(DataBase).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should add a reservation and return the id', async () => {
        insertMock.mockResolvedValueOnce(someId);

        const actualId = await sut.createReservation(someReservation);

        expect(actualId).toBe(someId);
        expect(insertMock).toHaveBeenCalledWith(someReservation);
    });

});